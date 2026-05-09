using Abstracciones.Interfaces.DA;
using Abstracciones.Modelo;
using Dapper;
using Npgsql;

namespace DA
{
    public class ProductoDA : IProductoDA
    {
        private readonly NpgsqlConnection _sqlConnection;

        public ProductoDA(IRepositorioDapper repositorioDapper)
        {
            _sqlConnection = repositorioDapper.ObetenerRepositorio();
        }

        public async Task<Guid> Agregar(ProductoRequest producto)
        {
            string query = @"
                INSERT INTO producto
                (
                    id,
                    idsubcategoria,
                    nombre,
                    descripcion,
                    precio,
                    stock,
                    codigobarras
                )
                VALUES
                (
                    @Id,
                    @IdSubCategoria,
                    @Nombre,
                    @Descripcion,
                    @Precio,
                    @Stock,
                    @CodigoBarras
                );
            ";

            Guid nuevoId = Guid.NewGuid();

            await _sqlConnection.ExecuteAsync(query, new
            {
                Id = nuevoId,
                IdSubCategoria = producto.IdSubCategoria,
                Nombre = producto.Nombre,
                Descripcion = producto.Descripcion,
                Precio = producto.Precio,
                Stock = producto.Stock,
                CodigoBarras = producto.CodigoBarras
            });

            return nuevoId;
        }

        public async Task<Guid> Editar(Guid Id, ProductoRequest producto)
        {
            await verificarProductoExiste(Id);

            string query = @"
                UPDATE producto
                SET
                    idsubcategoria = @IdSubCategoria,
                    nombre = @Nombre,
                    descripcion = @Descripcion,
                    precio = @Precio,
                    stock = @Stock,
                    codigobarras = @CodigoBarras
                WHERE id = @Id;
            ";

            await _sqlConnection.ExecuteAsync(query, new
            {
                Id = Id,
                IdSubCategoria = producto.IdSubCategoria,
                Nombre = producto.Nombre,
                Descripcion = producto.Descripcion,
                Precio = producto.Precio,
                Stock = producto.Stock,
                CodigoBarras = producto.CodigoBarras
            });

            return Id;
        }

        public async Task<Guid> Eliminar(Guid Id)
        {
            await verificarProductoExiste(Id);

            string query = @"
                DELETE FROM producto
                WHERE id = @Id;
            ";

            await _sqlConnection.ExecuteAsync(query, new
            {
                Id = Id
            });

            return Id;
        }

        public async Task<IEnumerable<ProductoResponse>> Obtener()
        {
            string query = @"
                SELECT
                    p.id,
                    p.nombre,
                    p.descripcion,
                    p.precio,
                    p.stock,
                    p.codigobarras AS CodigoBarras,
                    s.nombre AS SubCategoria,
                    c.nombre AS Categoria
                FROM producto p
                INNER JOIN subcategoria s
                    ON p.idsubcategoria = s.id
                INNER JOIN categoria c
                    ON s.idcategoria = c.id;
            ";

            var resultadoConsulta =
                await _sqlConnection.QueryAsync<ProductoResponse>(query);

            return resultadoConsulta;
        }

        public async Task<ProductoResponse> Obtener(Guid Id)
        {
            string query = @"
                SELECT
                    p.id,
                    p.nombre,
                    p.descripcion,
                    p.precio,
                    p.stock,
                    p.codigobarras AS CodigoBarras,
                    s.nombre AS SubCategoria,
                    c.nombre AS Categoria
                FROM producto p
                INNER JOIN subcategoria s
                    ON p.idsubcategoria = s.id
                INNER JOIN categoria c
                    ON s.idcategoria = c.id
                WHERE p.id = @Id;
            ";

            var resultadoConsulta =
                await _sqlConnection.QueryAsync<ProductoResponse>(
                    query,
                    new
                    {
                        Id = Id
                    });

            return resultadoConsulta.FirstOrDefault();
        }

        private async Task verificarProductoExiste(Guid Id)
        {
            ProductoResponse? resultadoConsultaProducto =
                await Obtener(Id);

            if (resultadoConsultaProducto == null)
                throw new Exception("No se encontro el producto");
        }
    }
}
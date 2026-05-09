using Abstracciones.Interfaces.DA;
using Abstracciones.Modelo;
using Dapper;
using Npgsql;

namespace DA
{
    public class ProductoDA : IProductoDA
    {
        private readonly IRepositorioDapper _repositorioDapper;

        public ProductoDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
        }

        public async Task<Guid> Agregar(ProductoRequest producto)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

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

            await connection.ExecuteAsync(query, new
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
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            bool existe = await verificarProductoExiste(Id);

            if (!existe)
                throw new Exception("No se encontro el producto");

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

            await connection.ExecuteAsync(query, new
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
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            bool existe = await verificarProductoExiste(Id);

            if (!existe)
                throw new Exception("No se encontro el producto");

            string query = @"
                DELETE FROM producto
                WHERE id = @Id;
            ";

            await connection.ExecuteAsync(query, new
            {
                Id = Id
            });

            return Id;
        }

        public async Task<IEnumerable<ProductoResponse>> Obtener()
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

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
                await connection.QueryAsync<ProductoResponse>(query);

            return resultadoConsulta;
        }

        public async Task<ProductoResponse?> Obtener(Guid Id)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

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
                await connection.QueryAsync<ProductoResponse>(
                    query,
                    new
                    {
                        Id = Id
                    });

            return resultadoConsulta.FirstOrDefault();
        }

        private async Task<bool> verificarProductoExiste(Guid Id)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            string query = @"
                SELECT COUNT(*)
                FROM producto
                WHERE id = @Id;
            ";

            int cantidad =
                await connection.ExecuteScalarAsync<int>(
                    query,
                    new
                    {
                        Id = Id
                    });

            return cantidad > 0;
        }
    }
}
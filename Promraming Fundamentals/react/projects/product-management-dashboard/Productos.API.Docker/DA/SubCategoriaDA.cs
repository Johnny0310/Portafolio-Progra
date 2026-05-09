using Abstracciones.Interfaces.DA;
using Abstracciones.Modelo;
using Dapper;
using Npgsql;

namespace DA
{
    public class SubCategoriaDA : ISubCategoriaDA
    {
        private readonly IRepositorioDapper _repositorioDapper;

        public SubCategoriaDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
        }

        public async Task<Guid> Agregar(SubCategoriaRequest subCategoria)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            string query = @"
                INSERT INTO subcategoria
                (
                    id,
                    idcategoria,
                    nombre
                )
                VALUES
                (
                    @Id,
                    @IdCategoria,
                    @Nombre
                );
            ";

            Guid nuevoId = Guid.NewGuid();

            await connection.ExecuteAsync(query, new
            {
                Id = nuevoId,
                IdCategoria = subCategoria.IdCategoria,
                Nombre = subCategoria.Nombre
            });

            return nuevoId;
        }

        public async Task<Guid> Editar(Guid Id, SubCategoriaRequest subCategoria)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            bool existe = await verificarSubCategoriaExiste(Id);

            if (!existe)
                throw new Exception("No se encontro la subcategoria");

            string query = @"
                UPDATE subcategoria
                SET
                    idcategoria = @IdCategoria,
                    nombre = @Nombre
                WHERE id = @Id;
            ";

            await connection.ExecuteAsync(query, new
            {
                Id = Id,
                IdCategoria = subCategoria.IdCategoria,
                Nombre = subCategoria.Nombre
            });

            return Id;
        }

        public async Task<Guid> Eliminar(Guid Id)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            bool existe = await verificarSubCategoriaExiste(Id);

            if (!existe)
                throw new Exception("No se encontro la subcategoria");

            string query = @"
                DELETE FROM subcategoria
                WHERE id = @Id;
            ";

            await connection.ExecuteAsync(query, new
            {
                Id = Id
            });

            return Id;
        }

        public async Task<IEnumerable<SubCategoriaResponse>> Obtener()
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            string query = @"
                SELECT
                    s.id,
                    s.idcategoria AS IdCategoria,
                    s.nombre,
                    c.nombre AS Categoria
                FROM subcategoria s
                INNER JOIN categoria c
                    ON s.idcategoria = c.id;
            ";

            var resultadoConsulta =
                await connection.QueryAsync<SubCategoriaResponse>(query);

            return resultadoConsulta;
        }

        public async Task<SubCategoriaResponse?> Obtener(Guid Id)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            string query = @"
                SELECT
                    s.id,
                    s.idcategoria AS IdCategoria,
                    s.nombre,
                    c.nombre AS Categoria
                FROM subcategoria s
                INNER JOIN categoria c
                    ON s.idcategoria = c.id
                WHERE s.id = @Id;
            ";

            var resultadoConsulta =
                await connection.QueryAsync<SubCategoriaResponse>(
                    query,
                    new
                    {
                        Id = Id
                    });

            return resultadoConsulta.FirstOrDefault();
        }

        private async Task<bool> verificarSubCategoriaExiste(Guid Id)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            string query = @"
                SELECT COUNT(*)
                FROM subcategoria
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
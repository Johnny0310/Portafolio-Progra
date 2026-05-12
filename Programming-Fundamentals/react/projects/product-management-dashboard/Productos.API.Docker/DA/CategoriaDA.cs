using Abstracciones.Interfaces.DA;
using Abstracciones.Modelo;
using Dapper;
using Npgsql;

namespace DA
{
    public class CategoriaDA : ICategoriaDA
    {
        private readonly IRepositorioDapper _repositorioDapper;

        public CategoriaDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
        }

        public async Task<Guid> Agregar(CategoriaRequest categoria)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            string query = @"
                INSERT INTO categoria
                (
                    id,
                    nombre
                )
                VALUES
                (
                    @Id,
                    @Nombre
                );
            ";

            Guid nuevoId = Guid.NewGuid();

            await connection.ExecuteAsync(query, new
            {
                Id = nuevoId,
                Nombre = categoria.Nombre
            });

            return nuevoId;
        }

        public async Task<Guid> Editar(Guid Id, CategoriaRequest categoria)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            bool existe = await verificarCategoriaExiste(Id);

            if (!existe)
                throw new Exception("No se encontro la categoria");

            string query = @"
                UPDATE categoria
                SET
                    nombre = @Nombre
                WHERE id = @Id;
            ";

            await connection.ExecuteAsync(query, new
            {
                Id = Id,
                Nombre = categoria.Nombre
            });

            return Id;
        }

        public async Task<Guid> Eliminar(Guid Id)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            bool existe = await verificarCategoriaExiste(Id);

            if (!existe)
                throw new Exception("No se encontro la categoria");

            string query = @"
                DELETE FROM categoria
                WHERE id = @Id;
            ";

            await connection.ExecuteAsync(query, new
            {
                Id = Id
            });

            return Id;
        }

        public async Task<IEnumerable<CategoriaResponse>> Obtener()
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            string query = @"
                SELECT
                    id,
                    nombre
                FROM categoria;
            ";

            var resultadoConsulta =
                await connection.QueryAsync<CategoriaResponse>(query);

            return resultadoConsulta;
        }

        public async Task<CategoriaResponse?> Obtener(Guid Id)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            string query = @"
                SELECT
                    id,
                    nombre
                FROM categoria
                WHERE id = @Id;
            ";

            var resultadoConsulta =
                await connection.QueryAsync<CategoriaResponse>(
                    query,
                    new
                    {
                        Id = Id
                    });

            return resultadoConsulta.FirstOrDefault();
        }

        private async Task<bool> verificarCategoriaExiste(Guid Id)
        {
            using var connection =
                _repositorioDapper.ObetenerRepositorio();

            string query = @"
                SELECT COUNT(*)
                FROM categoria
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
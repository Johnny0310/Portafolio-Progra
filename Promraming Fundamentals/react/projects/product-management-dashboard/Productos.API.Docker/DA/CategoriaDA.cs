using Abstracciones.Interfaces.DA;
using Abstracciones.Modelo;
using Dapper;
using Npgsql;

namespace DA
{
    public class CategoriaDA : ICategoriaDA
    {
        private readonly NpgsqlConnection _sqlConnection;

        public CategoriaDA(IRepositorioDapper repositorioDapper)
        {
            _sqlConnection = repositorioDapper.ObetenerRepositorio();
        }

        public async Task<Guid> Agregar(CategoriaRequest categoria)
        {
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

            await _sqlConnection.ExecuteAsync(query, new
            {
                Id = nuevoId,
                Nombre = categoria.Nombre
            });

            return nuevoId;
        }

        public async Task<Guid> Editar(Guid Id, CategoriaRequest categoria)
        {
            await verificarCategoriaExiste(Id);

            string query = @"
                UPDATE categoria
                SET
                    nombre = @Nombre
                WHERE id = @Id;
            ";

            await _sqlConnection.ExecuteAsync(query, new
            {
                Id = Id,
                Nombre = categoria.Nombre
            });

            return Id;
        }

        public async Task<Guid> Eliminar(Guid Id)
        {
            await verificarCategoriaExiste(Id);

            string query = @"
                DELETE FROM categoria
                WHERE id = @Id;
            ";

            await _sqlConnection.ExecuteAsync(query, new
            {
                Id = Id
            });

            return Id;
        }

        public async Task<IEnumerable<CategoriaResponse>> Obtener()
        {
            string query = @"
                SELECT
                    id,
                    nombre
                FROM categoria;
            ";

            var resultadoConsulta =
                await _sqlConnection.QueryAsync<CategoriaResponse>(query);

            return resultadoConsulta;
        }

        public async Task<CategoriaResponse> Obtener(Guid Id)
        {
            string query = @"
                SELECT
                    id,
                    nombre
                FROM categoria
                WHERE id = @Id;
            ";

            var resultadoConsulta =
                await _sqlConnection.QueryAsync<CategoriaResponse>(
                    query,
                    new
                    {
                        Id = Id
                    });

            return resultadoConsulta.FirstOrDefault();
        }

        private async Task verificarCategoriaExiste(Guid Id)
        {
            CategoriaResponse? resultadoConsultaCategoria =
                await Obtener(Id);

            if (resultadoConsultaCategoria == null)
                throw new Exception("No se encontro la categoria");
        }
    }
}
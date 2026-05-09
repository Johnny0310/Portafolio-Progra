using Abstracciones.Interfaces.DA;
using Abstracciones.Modelo;
using Dapper;
using Npgsql;

namespace DA
{
    public class SubCategoriaDA : ISubCategoriaDA
    {
        private readonly NpgsqlConnection _sqlConnection;

        public SubCategoriaDA(IRepositorioDapper repositorioDapper)
        {
            _sqlConnection = repositorioDapper.ObetenerRepositorio();
        }

        public async Task<Guid> Agregar(SubCategoriaRequest subCategoria)
        {
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

            await _sqlConnection.ExecuteAsync(query, new
            {
                Id = nuevoId,
                IdCategoria = subCategoria.IdCategoria,
                Nombre = subCategoria.Nombre
            });

            return nuevoId;
        }

        public async Task<Guid> Editar(Guid Id, SubCategoriaRequest subCategoria)
        {
            await verificarSubCategoriaExiste(Id);

            string query = @"
                UPDATE subcategoria
                SET
                    idcategoria = @IdCategoria,
                    nombre = @Nombre
                WHERE id = @Id;
            ";

            await _sqlConnection.ExecuteAsync(query, new
            {
                Id = Id,
                IdCategoria = subCategoria.IdCategoria,
                Nombre = subCategoria.Nombre
            });

            return Id;
        }

        public async Task<Guid> Eliminar(Guid Id)
        {
            await verificarSubCategoriaExiste(Id);

            string query = @"
                DELETE FROM subcategoria
                WHERE id = @Id;
            ";

            await _sqlConnection.ExecuteAsync(query, new
            {
                Id = Id
            });

            return Id;
        }

        public async Task<IEnumerable<SubCategoriaResponse>> Obtener()
        {
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
                await _sqlConnection.QueryAsync<SubCategoriaResponse>(query);

            return resultadoConsulta;
        }

        public async Task<SubCategoriaResponse> Obtener(Guid Id)
        {
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
                await _sqlConnection.QueryAsync<SubCategoriaResponse>(
                    query,
                    new
                    {
                        Id = Id
                    });

            return resultadoConsulta.FirstOrDefault();
        }

        private async Task verificarSubCategoriaExiste(Guid Id)
        {
            SubCategoriaResponse? resultadoConsultaSubCategoria =
                await Obtener(Id);

            if (resultadoConsultaSubCategoria == null)
                throw new Exception("No se encontro la subcategoria");
        }
    }
}
using Abstracciones.Interfaces.DA;
using Abstracciones.Modelo;
using Microsoft.Data.SqlClient;
using Dapper;

namespace DA
{
    public class SubCategoriaDA : ISubCategoriaDA
    {
        private IRepositorioDapper _repositorioDapper;
        private SqlConnection _sqlConnection;

        public SubCategoriaDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _sqlConnection = _repositorioDapper.ObetenerRepositorio();
        }

        public async Task<Guid> Agregar(SubCategoriaRequest subCategoria)
        {
            string query = @"AgregarSubCategoria";

            var resultadoConsulta = await _sqlConnection.ExecuteScalarAsync<Guid>(query, new
            {
                Id = Guid.NewGuid(),
                IdCategoria = subCategoria.IdCategoria,
                Nombre = subCategoria.Nombre
            });

            return resultadoConsulta;
        }

        public async Task<Guid> Editar(Guid Id, SubCategoriaRequest subCategoria)
        {
            await verificarSubCategoriaExiste(Id);

            string query = @"EditarSubCategoria";

            var resultadoConsulta = await _sqlConnection.ExecuteScalarAsync<Guid>(query, new
            {
                Id = Id,
                IdCategoria = subCategoria.IdCategoria,
                Nombre = subCategoria.Nombre
            });

            return resultadoConsulta;
        }

        public async Task<Guid> Eliminar(Guid Id)
        {
            await verificarSubCategoriaExiste(Id);

            string query = @"EliminarSubCategoria";

            var resultadoConsulta = await _sqlConnection.ExecuteScalarAsync<Guid>(query, new
            {
                Id = Id
            });

            return resultadoConsulta;
        }

        public async Task<IEnumerable<SubCategoriaResponse>> Obtener()
        {
            string query = @"ObtenerSubCategorias";

            var resultadoConsulta =
                await _sqlConnection.QueryAsync<SubCategoriaResponse>(query);

            return resultadoConsulta;
        }

        public async Task<SubCategoriaResponse> Obtener(Guid Id)
        {
            string query = @"ObtenerSubCategoria";

            var resultadoConsulta =
                await _sqlConnection.QueryAsync<SubCategoriaResponse>(query, new
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
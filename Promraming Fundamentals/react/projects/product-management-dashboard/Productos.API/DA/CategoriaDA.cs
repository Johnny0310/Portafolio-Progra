using Abstracciones.Interfaces.DA;
using Abstracciones.Modelo;
using Microsoft.Data.SqlClient;
using Dapper;

namespace DA
{
    public class CategoriaDA : ICategoriaDA
    {
        private IRepositorioDapper _repositorioDapper;
        private SqlConnection _sqlConnection;

        public CategoriaDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _sqlConnection = _repositorioDapper.ObetenerRepositorio();
        }

        public async Task<Guid> Agregar(CategoriaRequest categoria)
        {
            string query = @"AgregarCategoria";

            var resultadoConsulta = await _sqlConnection.ExecuteScalarAsync<Guid>(query, new
            {
                Id = Guid.NewGuid(),
                Nombre = categoria.Nombre
            });

            return resultadoConsulta;
        }

        public async Task<Guid> Editar(Guid Id, CategoriaRequest categoria)
        {
            await verificarCategoriaExiste(Id);

            string query = @"EditarCategoria";

            var resultadoConsulta = await _sqlConnection.ExecuteScalarAsync<Guid>(query, new
            {
                Id = Id,
                Nombre = categoria.Nombre
            });

            return resultadoConsulta;
        }

        public async Task<Guid> Eliminar(Guid Id)
        {
            await verificarCategoriaExiste(Id);

            string query = @"EliminarCategoria";

            var resultadoConsulta = await _sqlConnection.ExecuteScalarAsync<Guid>(query, new
            {
                Id = Id
            });

            return resultadoConsulta;
        }

        public async Task<IEnumerable<CategoriaResponse>> Obtener()
        {
            string query = @"ObtenerCategorias";

            var resultadoConsulta =
                await _sqlConnection.QueryAsync<CategoriaResponse>(query);

            return resultadoConsulta;
        }

        public async Task<CategoriaResponse> Obtener(Guid Id)
        {
            string query = @"ObtenerCategoria";

            var resultadoConsulta =
                await _sqlConnection.QueryAsync<CategoriaResponse>(query, new
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
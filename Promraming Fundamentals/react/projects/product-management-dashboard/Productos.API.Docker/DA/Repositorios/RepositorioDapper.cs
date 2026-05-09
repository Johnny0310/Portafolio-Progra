using Abstracciones.Interfaces.DA;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace DA.Repositorios
{
    public class RepositorioDapper : IRepositorioDapper
    {
        private readonly IConfiguration _configuration;

        public RepositorioDapper(
            IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public NpgsqlConnection ObetenerRepositorio()
        {
            string connectionString =
                _configuration.GetConnectionString("DefaultConnection");

            return new NpgsqlConnection(connectionString);
        }
    }
}
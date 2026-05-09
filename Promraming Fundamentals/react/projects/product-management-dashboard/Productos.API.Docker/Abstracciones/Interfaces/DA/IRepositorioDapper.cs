using Microsoft.Data.SqlClient;
using Npgsql;

namespace Abstracciones.Interfaces.DA
{
    public interface IRepositorioDapper
    {
        NpgsqlConnection ObetenerRepositorio();
    }
}

using Abstracciones.Modelo;

namespace Abstracciones.Interfaces.DA
{
    public interface ICategoriaDA
    {
        Task<IEnumerable<CategoriaResponse>> Obtener();

        Task<CategoriaResponse> Obtener(Guid Id);

        Task<Guid> Agregar(CategoriaRequest categoria);

        Task<Guid> Editar(Guid Id, CategoriaRequest categoria);

        Task<Guid> Eliminar(Guid Id);
    }
}

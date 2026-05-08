using Abstracciones.Interfaces.DA;
using Abstracciones.Interfaces.Flujo;
using Abstracciones.Modelo;

namespace Flujo
{
    public class CategoriaFlujo : ICategoriaFlujo
    {
        private ICategoriaDA _categoriaDA;

        public CategoriaFlujo(ICategoriaDA categoriaDA)
        {
            _categoriaDA = categoriaDA;
        }

        public Task<Guid> Agregar(CategoriaRequest categoria)
        {
            return _categoriaDA.Agregar(categoria);
        }

        public Task<Guid> Editar(Guid Id, CategoriaRequest categoria)
        {
            return _categoriaDA.Editar(Id, categoria);
        }

        public Task<Guid> Eliminar(Guid Id)
        {
            return _categoriaDA.Eliminar(Id);
        }

        public Task<IEnumerable<CategoriaResponse>> Obtener()
        {
            return _categoriaDA.Obtener();
        }

        public Task<CategoriaResponse> Obtener(Guid Id)
        {
            return _categoriaDA.Obtener(Id);
        }
    }
}
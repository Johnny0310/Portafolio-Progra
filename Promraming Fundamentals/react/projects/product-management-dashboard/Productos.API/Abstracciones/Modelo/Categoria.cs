using System.ComponentModel.DataAnnotations;

namespace Abstracciones.Modelo
{
    public class CategoriaBase
    {
        [Required(ErrorMessage = "La propiedad Nombre es requerida")]
        [StringLength(30, MinimumLength = 2,
            ErrorMessage = "El Nombre debe tener entre 2 y 30 caracteres")]
        public string Nombre { get; set; }
    }

    public class CategoriaRequest : CategoriaBase
    {
    }

    public class CategoriaResponse : CategoriaBase
    {
        public Guid Id { get; set; }
    }
}
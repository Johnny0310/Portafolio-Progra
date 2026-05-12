using System.ComponentModel.DataAnnotations;

namespace Abstracciones.Modelo
{
    public class SubCategoriaBase
    {
        [Required(ErrorMessage = "La propiedad Nombre es requerida")]
        [StringLength(30, MinimumLength = 2,
            ErrorMessage = "El Nombre debe tener entre 2 y 30 caracteres")]
        public string Nombre { get; set; }
    }

    public class SubCategoriaRequest : SubCategoriaBase
    {
        [Required(ErrorMessage = "La propiedad IdCategoria es requerida")]
        public Guid IdCategoria { get; set; }
    }

    public class SubCategoriaResponse : SubCategoriaBase
    {
        public Guid Id { get; set; }

        public Guid IdCategoria { get; set; }

        public string Categoria { get; set; }
    }
}
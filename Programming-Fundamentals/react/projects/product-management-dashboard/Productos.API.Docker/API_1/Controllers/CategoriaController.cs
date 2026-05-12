using Abstracciones.Interfaces.API;
using Abstracciones.Interfaces.Flujo;
using Abstracciones.Modelo;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase, ICategoriaController
    {
        private ICategoriaFlujo _categoriaFlujo;

        private ILogger<CategoriaController> _logger;

        public CategoriaController(
            ICategoriaFlujo categoriaFlujo,
            ILogger<CategoriaController> logger)
        {
            _categoriaFlujo = categoriaFlujo;
            _logger = logger;
        }

        #region Constructores

        [HttpPost]
        public async Task<IActionResult> Agregar(
            [FromBody] CategoriaRequest categoria)
        {
            var resultado =
                await _categoriaFlujo.Agregar(categoria);

            return CreatedAtAction(
                nameof(Obtener),
                new { Id = resultado });
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> Editar(
            [FromRoute] Guid Id,
            [FromBody] CategoriaRequest categoria)
        {
            var resultado =
                await _categoriaFlujo.Editar(Id, categoria);

            return Ok(resultado);
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Eliminar(
            [FromRoute] Guid Id)
        {
            await _categoriaFlujo.Eliminar(Id);

            return NoContent();
        }

        [HttpGet]
        public async Task<IActionResult> Obtener()
        {
            var resultado =
                await _categoriaFlujo.Obtener();

            if (!resultado.Any())
                return NoContent();

            return Ok(resultado);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> Obtener(
            [FromRoute] Guid Id)
        {

            var resultado =
                await _categoriaFlujo.Obtener(Id);

            return Ok(resultado);
        }

        #endregion

    }
}
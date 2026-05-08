using Abstracciones.Interfaces.API;
using Abstracciones.Interfaces.Flujo;
using Abstracciones.Modelo;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategoriaController : ControllerBase, ISubCategoriaController
    {
        private ISubCategoriaFlujo _subCategoriaFlujo;

        private ILogger<SubCategoriaController> _logger;

        public SubCategoriaController(
            ISubCategoriaFlujo subCategoriaFlujo,
            ILogger<SubCategoriaController> logger)
        {
            _subCategoriaFlujo = subCategoriaFlujo;
            _logger = logger;
        }

        #region Constructores

        [HttpPost]
        public async Task<IActionResult> Agregar(
            [FromBody] SubCategoriaRequest subCategoria)
        {
            var resultado =
                await _subCategoriaFlujo.Agregar(subCategoria);

            return CreatedAtAction(
                nameof(Obtener),
                new { Id = resultado });
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> Editar(
            [FromRoute] Guid Id,
            [FromBody] SubCategoriaRequest subCategoria)
        {
            if (!await VerificarSubCategoriaExiste(Id))
                return NotFound("La SubCategoria ID no existe");

            var resultado =
                await _subCategoriaFlujo.Editar(Id, subCategoria);

            return Ok(resultado);
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Eliminar(
            [FromRoute] Guid Id)
        {
            if (!await VerificarSubCategoriaExiste(Id))
                return NotFound("La SubCategoria ID no existe");

            await _subCategoriaFlujo.Eliminar(Id);

            return NoContent();
        }

        [HttpGet]
        public async Task<IActionResult> Obtener()
        {
            var resultado =
                await _subCategoriaFlujo.Obtener();

            if (!resultado.Any())
                return NoContent();

            return Ok(resultado);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> Obtener(
            [FromRoute] Guid Id)
        {
            if (!await VerificarSubCategoriaExiste(Id))
                return NotFound("La SubCategoria ID no existe");

            var resultado =
                await _subCategoriaFlujo.Obtener(Id);

            return Ok(resultado);
        }

        #endregion

        #region Helpers

        private async Task<bool> VerificarSubCategoriaExiste(Guid Id)
        {
            var resultadoValidacion = false;

            var resultadoSubCategoriaExiste =
                await _subCategoriaFlujo.Obtener(Id);

            if (resultadoSubCategoriaExiste != null)
                resultadoValidacion = true;

            return resultadoValidacion;
        }

        #endregion
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using jokenpo_api.Data;
using jokenpo_api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace jokenpo_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JogadaController : Controller
    {
        public IRepository _repo;

        public JogadaController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var item = await _repo.GetAllJogada();

                return Ok(item);
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falhou ao obter a resposta");
            }
        }
        [HttpPost]
        public async Task<IActionResult> Post(Jogada model)
        {
            try
            {
                model.Nome = model.Nome.ToUpper();
                _repo.Add(model);
                if (await _repo.SaveChangeAsync())
                {
                    return Created($"/api/jogada/{model.Id}", model);
                }

            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Requesição Falhou");
            }
            return BadRequest();
        }
        [HttpDelete("{jogadaId}")]
        public async Task<IActionResult> Delete(int jogadaId)
        {
            try
            {
                var jogada = await _repo.GetJogadaById(jogadaId);

                if (jogada == null) return NotFound();
                _repo.Delete(jogada);

                if (await _repo.SaveChangeAsync())
                {
                    return Ok();
                }
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados Falhou");
            }
            return BadRequest();
        }
    }
}

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
    public class JogadorController : Controller
    {
        public IRepository _repo;
        
        public JogadorController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var item = await _repo.GetAllGamers();

                return Ok(item);
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falhou ao obter a resposta");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Jogador model)
        {
            try
            {
                if (model.Nome.Length < 3)
                {
                    return BadRequest();
                }

                _repo.Add(model);
                if (await _repo.SaveChangeAsync())
                {
                    return Created($"/api/jogador/{model.Id}", model);
                }

            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Requesição Falhou");
            }
            return BadRequest();
        }

        [HttpDelete("{jogadorId}")]
        public async Task<IActionResult> Delete(int jogadorId)
        {
            try
            {
                var jogador = await _repo.GetJogadorById(jogadorId);

                if (jogador == null) return NotFound();
                _repo.Delete(jogador);

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

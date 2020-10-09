using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using jokenpo_api.Data;
using jokenpo_api.Model;
using jokenpo_api.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace jokenpo_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartidaController : Controller
    {
        public IRepository _repo;
  
        public PartidaController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var item = await _repo.GetAllPartida();

                return Ok(item);
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falhou ao obter a resposta");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Partida model)
        {
            try
            {
                var res = _repo.GetResultado(model);
                model.JogadorVencedor = res;
                _repo.Add(model);

                if (await _repo.SaveChangeAsync())
                {                                   
                    return Created($"/api/partida/{model.Id}", model);
                }

            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Requesição Falhou");
            }
            return BadRequest();
        }
        [HttpGet("lista")]
        public async Task<IActionResult> GetJogadorAndJogada()
        {
            try
            {
                VMLista vm = new VMLista
                {
                    AllJogada = await _repo.GetAllJogada(),
                    AllJogador = await _repo.GetAllGamers()
                };

                return Ok(vm);

            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Requesição Falhou");
            }
        }
    }
}

using jokenpo_api.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace jokenpo_api.Data
{
  public interface IRepository
  {
    void Add<T>(T entity) where T : class;
    void Update<T>(T entity) where T : class;
    void Delete<T>(T entity) where T : class;
    Task<bool> SaveChangeAsync();

    Task<List<Jogador>> GetAllGamers();
    Task<List<Jogada>> GetAllJogada();
    Task<List<Partida>> GetAllPartida();

    Task<Jogada> GetJogadaById(int jogadaId);

    Task<Jogador> GetJogadorById(int jogadorId);

    string GetResultado(Partida partida);
  }
}

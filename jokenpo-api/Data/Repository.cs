using jokenpo_api.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace jokenpo_api.Data
{
  public class Repository : IRepository
  {
    public AppDbContext _context { get; }
    public Repository(AppDbContext context)
    {
      _context = context;
    }

    public async Task<List<Jogador>> GetAllGamers()
    {
      return await _context.Jogadores.ToListAsync();
    }

    public void Add<T>(T entity) where T : class
    {
      _context.Add(entity);
    }

    public void Update<T>(T entity) where T : class
    {
      _context.Update(entity);
    }

    public void Delete<T>(T entity) where T : class
    {
      _context.Remove(entity);
    }

    public async Task<bool> SaveChangeAsync()
    {
      return (await _context.SaveChangesAsync() > 0);
    }

    public async Task<List<Jogada>> GetAllJogada()
    {
      return await _context.Jogadas.ToListAsync();
    }

    public async Task<List<Partida>> GetAllPartida()
    {

      var query = await _context.Partidas.ToListAsync();
      return query;
    }

    public async Task<Jogada> GetJogadaById(int jogadaId)
    {
      IQueryable<Jogada> query = _context.Jogadas;
      query = query.AsNoTracking().Where(j => j.Id == jogadaId);

      return await query.FirstOrDefaultAsync();
    }

    public async Task<Jogador> GetJogadorById(int jogadorId)
    {
      IQueryable<Jogador> query = _context.Jogadores;
      query = query.AsNoTracking().Where(j => j.Id == jogadorId);

      return await query.FirstOrDefaultAsync();
    }

    public string GetResultado(Partida partida)
    {

      string result = string.Empty;
      if (partida.JogadaJogador1.Contains("PEDRA") && partida.JogadaJogador2.Contains("PEDRA") && (partida.JogadaJogador3.Contains("PEDRA") || partida.JogadaJogador3.Contains("TESOURA")))
      {
        result = "EMPATE";

      }
      else if (partida.JogadaJogador1.Contains("PEDRA") && partida.JogadaJogador2.Contains("TESOURA") && partida.JogadaJogador3.Contains("PEDRA"))
      {
        result = "EMPATE";
      }
      else if (partida.JogadaJogador1.Contains("PEDRA") && partida.JogadaJogador2.Contains("TESOURA") && partida.JogadaJogador3.Contains("TESOURA"))
      {
        result = "JOGADOR 1 - VITÓRIA";
      }
      else if (partida.JogadaJogador1.Contains("TESOURA") && partida.JogadaJogador2.Contains("PEDRA") && partida.JogadaJogador3.Contains("PEDRA"))
      {
        result = "EMPATE";
      }
      else if (partida.JogadaJogador1.Contains("TESOURA") && partida.JogadaJogador2.Contains("TESOURA") && partida.JogadaJogador3.Contains("PEDRA"))
      {
        result = "JOGADOR 3 - VITÓRIA";
      }
      else if (partida.JogadaJogador1.Contains("TESOURA") && partida.JogadaJogador2.Contains("TESOURA") && partida.JogadaJogador3.Contains("TESOURA"))
      {
        result = "EMPATE";
      }
      else if (partida.JogadaJogador1.Contains("TESOURA") && partida.JogadaJogador2.Contains("PEDRA") && partida.JogadaJogador3.Contains("TESOURA"))
      {
        result = "JOGADOR 2 - VITORIA";
      }
      else if (partida.JogadaJogador1.Contains("PAPEL") && partida.JogadaJogador2.Contains("PAPEL") && partida.JogadaJogador3.Contains("TESOURA"))
      {
        result = "JOGADOR 3 - VITÓRIA";
      }
      else if (partida.JogadaJogador1.Contains("PAPEL") && partida.JogadaJogador2.Contains("TESOURA") && partida.JogadaJogador3.Contains("PAPEL"))
      {
        result = "JOGADOR 2 - VITÓRIA";
      }
      else if (partida.JogadaJogador1.Contains("TESOURA") && partida.JogadaJogador2.Contains("TESOURA") && partida.JogadaJogador3.Contains("PAPEL"))
      {
        result = "EMPATE";
      }
      else if (partida.JogadaJogador1.Contains("PAPEL") && partida.JogadaJogador2.Contains("PEDRA") && partida.JogadaJogador3.Contains("PEDRA"))
      {
        result = "JOGADOR 1 - VITÓRIA";
      }
      else if (partida.JogadaJogador1.Contains("PEDRA") && partida.JogadaJogador2.Contains("PEDRA") && partida.JogadaJogador3.Contains("PAPEL"))
      {
        result = "JOGADOR 3 - VITÓRIA";
      }
      else if (partida.JogadaJogador1.Contains("PEDRA") && partida.JogadaJogador2.Contains("TESOURA") && partida.JogadaJogador3.Contains("PAPEL"))
      {
        result = "JOGADOR 3 - VITÓRIA";
      }
      else if (partida.JogadaJogador1.Contains("PAPEL") && partida.JogadaJogador2.Contains("TESOURA") && partida.JogadaJogador3.Contains("PEDRA"))
      {
        result = "JOGADOR 3 - VITÓRIA";
      }
      else if (partida.JogadaJogador1.Contains("PEDRA") && partida.JogadaJogador2.Contains("PAPEL") && partida.JogadaJogador3.Contains("TESOURA"))
      {
        result = "JOGADOR 3 - VITÓRIA";
      }
      else if (partida.JogadaJogador1.Contains("PEDRA") && partida.JogadaJogador2.Contains("PAPEL") && partida.JogadaJogador3.Contains("PAPEL"))
      {
        result = "EMPATE";
      }
      else if (partida.JogadaJogador1.Contains("PEDRA") && partida.JogadaJogador2.Contains("PAPEL") && partida.JogadaJogador3.Contains("PEDRA"))
      {
        result = "JOGADOR 2 - VITORIA";
      }
      else if (partida.JogadaJogador1.Contains("PAPEL") && partida.JogadaJogador2.Contains("PAPEL") && partida.JogadaJogador3.Contains("PEDRA"))
      {
        result = "EMPATE";
      }
      else if (partida.JogadaJogador1.Contains("PAPEL") && partida.JogadaJogador2.Contains("PAPEL") && partida.JogadaJogador3.Contains("PAPEL"))
      {
        result = "EMPATE";
      }
      else if (partida.JogadaJogador1.Contains("PAPEL") && partida.JogadaJogador2.Contains("PEDRA") && partida.JogadaJogador3.Contains("PAPEL"))
      {
        result = "EMPATE";
      }
      else if (partida.JogadaJogador1.Contains("PAPEL") && partida.JogadaJogador2.Contains("PEDRA") && partida.JogadaJogador3.Contains("TESOURA"))
      {
        result = "JOGADOR 3 - VITÓRIA";
      }
      else
      {
        result = "NÃO FOI POSSÍVEL DETERMINAR O RESULTADO";
      }

      return result;
    }


  }
}

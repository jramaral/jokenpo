using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace jokenpo_api.Model
{
  public class AppDbContext : DbContext
  {

    public DbSet<Jogador> Jogadores { get; set; }
    public DbSet<Partida> Partidas { get; set; }
    public DbSet<Jogada> Jogadas { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }


  }
}

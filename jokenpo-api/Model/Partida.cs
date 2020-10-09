using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace jokenpo_api.Model
{
    public class Partida
    {
        public int Id { get; set; }
        public DateTime DataHoraPartida { get; set; } = DateTime.Now;

        public string Jogador1 { get; set; }
        public string JogadaJogador1 { get; set; }
        public string Jogador2 { get; set; }
        public string JogadaJogador2 { get; set; }
        public string Jogador3 { get; set; }
        public string JogadaJogador3 { get; set; }
        public string JogadorVencedor { get; set; }



    }
}

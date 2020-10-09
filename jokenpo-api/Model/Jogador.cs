using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace jokenpo_api.Model
{
    public class Jogador
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public Partida Partida { get; set; }

    }
}

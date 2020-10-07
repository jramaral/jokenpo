import React from "react";
import PageDefault from "./../../components/pageDefault";
export default function TipoJogada() {
  return (
    <PageDefault>
      <div className="container">
        <a className="waves-effect waves-light btn-large">
          NOVO TIPO DE JOGADA
        </a>
        <table>
          <thead>
            <tr>
              <th>Nome da Jogada</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>PEDRA</td>
              <td>Eclair</td>
            </tr>
            <tr>
              <td>PAPEL</td>
              <td>Jellybean</td>
            </tr>
            <tr>
              <td>TESOURA</td>
              <td>Lollipop</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageDefault>
  );
}

import React from "react";
import PageDefault from "./../../components/pageDefault";
export default function Jogo() {
  return (
    <PageDefault>
      <div className="container">
        <p>Pagina do Jogo</p>
        <div class="row">
          <div class="col s6">
            <label>Jogador 1</label>
            <select class="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">PEDRO</option>
              <option value="2">JOSE</option>
              <option value="3">LUIZ</option>
            </select>
          </div>
          <div class="col s6">
            <label>Jogada </label>
            <select class="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">PEDRA</option>
              <option value="2">PAPEL</option>
              <option value="3">TESOURA</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col s6">
            <label>Jogador 2</label>
            <select class="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">PEDRO</option>
              <option value="2">JOSE</option>
              <option value="3">LUIZ</option>
            </select>
          </div>
          <div class="col s6">
            <label>Jogada </label>
            <select class="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">PEDRA</option>
              <option value="2">PAPEL</option>
              <option value="3">TESOURA</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col s6">
            <label>Jogador 3</label>
            <select class="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">PEDRO</option>
              <option value="2">JOSE</option>
              <option value="3">LUIZ</option>
            </select>
          </div>
          <div class="col s6">
            <label>Jogada </label>
            <select class="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">PEDRA</option>
              <option value="2">PAPEL</option>
              <option value="3">TESOURA</option>
            </select>
          </div>
        </div>
        <a className="waves-effect waves-light btn-large">JOGAR</a>
      </div>
    </PageDefault>
  );
}

import React, { useState, useEffect } from "react";
import PageDefault from "./../../components/pageDefault";

import * as api from "../../api/apiService";
import Resultado from "./../../components/resultado/index";

export default function Jogo() {
  const [openAlert, setOpenAlert] = useState(false);
  const [data, setData] = useState([]);
  const [jogada, setJogada] = useState([]);
  const [jogador, setJogador] = useState([]);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const getDados = async () => {
      const res = await api.getJogadorAndJogada();
      setJogador(res.data.allJogador);
      setJogada(res.data.allJogada);
      const partida = {
        jogador1: "",
        jogador2: "",
        jogador3: "",
        jogadaJogador1: "",
        jogadaJogador2: "",
        jogadaJogador3: "",
      };
      setData(partida);
    };

    getDados();
  }, []);

  const handleSelect = (event) => {
    data.jogador1 = event.target.value;
    setData({ ...data });
  };
  const handleSelect2 = (event) => {
    data.jogador2 = event.target.value;
    setData({ ...data });
  };

  const handleSelect3 = (event) => {
    data.jogador3 = event.target.value;
    setData({ ...data });
  };
  const handleSelectJogada1 = (event) => {
    data.jogadaJogador1 = event.target.value;
    setData({ ...data });
  };
  const handleSelectJogada2 = (event) => {
    data.jogadaJogador2 = event.target.value;
    setData({ ...data });
  };
  const handleSelectJogada3 = (event) => {
    data.jogadaJogador3 = event.target.value;
    setData({ ...data });
  };

  const handleSavePartida = async () => {
    const res = await api.createPartida(data);

    if (!res) {
      setResultado(null);
      setOpenAlert(true);
      return;
    }

    setResultado(res);

    const partida = {
      jogador1: "",
      jogador2: "",
      jogador3: "",
      jogadaJogador1: "",
      jogadaJogador2: "",
      jogadaJogador3: "",
    };
    setData(partida);
    setOpenAlert(true);
  };

  const handleConfirmClick = (onConfirm) => {
    setOpenAlert(onConfirm);
  };

  return (
    <PageDefault>
      <div className="container">
        <div className="row">
          <div className="col s6">
            <label>Jogador 1</label>
            <select
              id="jogador1"
              className="browser-default"
              value={data.jogador1}
              onChange={handleSelect}
            >
              <option aria-label="None" value="" />
              {jogador.map((item) => {
                return (
                  <option key={item.id} value={item.nome}>
                    {item.nome}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col s6">
            <label>Jogada </label>
            <select
              id="jogada1"
              className="browser-default"
              value={data.jogadaJogador1}
              onChange={handleSelectJogada1}
            >
              <option aria-label="None" value="" />
              {jogada.map((item) => {
                return (
                  <option key={item.id} value={item.nome}>
                    {item.nome}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <label>Jogador 2</label>
            <select
              id="jogador2"
              className="browser-default"
              value={data.jogador2}
              onChange={handleSelect2}
            >
              <option aria-label="None" value="" />
              {jogador.map((item) => {
                return (
                  <option key={item.id} value={item.nome}>
                    {item.nome}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col s6">
            <label>Jogada </label>
            <select
              id="jogada2"
              className="browser-default"
              value={data.jogadaJogador2}
              onChange={handleSelectJogada2}
            >
              <option aria-label="None" value="" />
              {jogada.map((item) => {
                return (
                  <option key={item.id} value={item.nome}>
                    {item.nome}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <label>Jogador 3</label>
            <select
              id="jogador3"
              className="browser-default"
              value={data.jogador3}
              onChange={handleSelect3}
            >
              <option aria-label="None" value="" />
              {jogador.map((item) => {
                return (
                  <option key={item.id} value={item.nome}>
                    {item.nome}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col s6">
            <label>Jogada </label>
            <select
              id="jogada3"
              className="browser-default"
              value={data.jogadaJogador3}
              onChange={handleSelectJogada3}
            >
              <option aria-label="None" value="" />
              {jogada.map((item) => {
                return (
                  <option key={item.id} value={item.nome}>
                    {item.nome}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <a
          href="#/"
          className="waves-effect waves-light btn-large"
          onClick={handleSavePartida}
        >
          JOGAR
        </a>
      </div>
      {openAlert && (
        <Resultado
          onConfirm={handleConfirmClick}
          msg="RESULTADO DA PARTIDA"
          result={resultado}
        />
      )}
    </PageDefault>
  );
}

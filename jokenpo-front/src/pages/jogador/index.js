import React, { useState, useEffect } from "react";

import PageDefault from "./../../components/pageDefault";
import CadastroJogador from "./cadastro/index";
import * as api from "../../api/apiService";

import Preloader from "./../../components/preloader";

export default function Jogador() {
  const [openAlert, setOpenAlert] = useState(false);

  const [dados, setDados] = useState(null);

  useEffect(() => {
    const getJogador = async () => {
      const reg = await api.getAllJogador();

      setTimeout(() => {
        setDados(reg);
      }, 500);
    };

    getJogador();
  }, []);

  const handleConfirmClick = async (trueOrFalse, reg) => {
    if (trueOrFalse && !!reg.nome && reg.nome.length >= 3) {
      await SaveJogador(reg);
    } else {
      setOpenAlert(false);
    }
  };

  const SaveJogador = async (param) => {
    const reg = await api.createJogador(param);

    dados.push(reg);
    setOpenAlert(false);
    setDados(dados);
  };

  const handleDelete = async (item) => {
    const code = await api.removeJogador(item.id);

    if (code === 200) {
      const newData = await dados.filter((element) => element.id !== item.id);
      setDados(newData);
    }
  };
  return (
    <PageDefault>
      <div className="container">
        {dados === null && <Preloader />}
        <a
          href="#/"
          className="waves-effect waves-light btn-large"
          style={styles.customButton}
          onClick={() => {
            setOpenAlert(true);
          }}
        >
          NOVO JOGADOR
        </a>

        <table>
          <thead>
            <tr>
              <th>Nome do Jogador</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {dados !== null &&
              dados.map((row) => (
                <tr key={row.id}>
                  <td>{row.nome}</td>
                  <td>
                    <a
                      href="#/"
                      className="waves-effect waves-teal btn-flat"
                      data-position="bottom"
                      data-tooltip="I am a tooltip"
                      onClick={() => handleDelete(row)}
                      alt={row.nome}
                    >
                      <i className="tiny material-icons">delete</i>
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {openAlert && (
        <CadastroJogador onConfirm={handleConfirmClick} msg="NOVO JOGADOR" />
      )}
    </PageDefault>
  );
}

const styles = {
  customButton: {
    marginTop: 10,
  },
};

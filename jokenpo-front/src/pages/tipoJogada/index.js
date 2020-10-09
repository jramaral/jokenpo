import React, { useState, useEffect } from "react";
import PageDefault from "./../../components/pageDefault";
import CadastroJogada from "./cadastro";

import * as api from "../../api/apiService";

import Preloader from "./../../components/preloader";

import Alert from "./../../components/alert";

export default function TipoJogada() {
  const [openModal, setOpenModal] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);

  const [mensagem, setMensagem] = useState();

  const [dados, setDados] = useState(null);

  useEffect(() => {
    const getJogada = async () => {
      const reg = await api.getAllJogada();

      setTimeout(() => {
        setDados(reg);
      }, 500);
    };

    getJogada();
  }, []);

  const handleConfirmClick = async (trueOrFalse, reg) => {
    if (!trueOrFalse) {
      setOpenModal(false);
      return;
    }

    if (
      (reg.nome.includes("PEDRA") ||
        reg.nome.includes("PAPEL") ||
        reg.nome.includes("TESOURA")) &&
      trueOrFalse
    ) {
      await SaveJogada(reg);
    } else {
      setOpenModal(false);
      setMensagem("OS NOMES PERMITIDOS SÃO: PEDRA, PAPEL OU TESOURA");
      setOpenAlert(true);
      return;
    }
  };

  const SaveJogada = async (param) => {
    const reg = await api.createTipoJogada(param);

    dados.push(reg);
    setOpenModal(false);
    setDados(dados);
  };
  const handleDelete = async (item) => {
    const code = await api.removeJogada(item.id);

    if (code === 200) {
      const newData = await dados.filter((element) => element.id !== item.id);
      setDados(newData);
      console.log(newData);
    }
  };
  const handleDesativar = (desativar) => {
    setOpenAlert(desativar);
  };
  const handleOpenModal = () => {
    handleDesativar(false);
    setOpenModal(true);
  };
  return (
    <PageDefault>
      <div className="container">
        {dados === null && <Preloader />}
        <a
          href="#/"
          className="waves-effect waves-light btn-large"
          style={styles.customButton}
          onClick={handleOpenModal}
        >
          NOVO TIPO DE JOGADA
        </a>
        {openAlert && <Alert msg={mensagem} desativar={handleDesativar} />}
        <table>
          <thead>
            <tr>
              <th>Nome da Jogada</th>
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

      {openModal && (
        <CadastroJogada
          onConfirm={handleConfirmClick}
          msg="NOVO TIPO DE JOGADA"
        />
      )}
    </PageDefault>
  );
}
const styles = {
  customButton: {
    marginTop: 10,
  },
};

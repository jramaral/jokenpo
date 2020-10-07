import React, { useState } from "react";

import Modal from "react-modal";

import * as S from "./styles";

Modal.setAppElement("#root");

export default function CadastroJogador({ onConfirm, msg }) {
  const [simNao, setSimNao] = useState(false);

  const handleCloseCancel = () => {
    onConfirm(false);
  };

  return (
    <>
      <Modal isOpen={true} style={stylecss}>
        <header>
          <span style={styles.title}>{msg}</span>
        </header>

        <div class="row">
          <label class="active">Nome do Jogador</label>
          <input type="text" autoFocus class="validate" />
        </div>

        <S.ContainerButton>
          <S.ContainerGreen>
            <button>SALVAR</button>
          </S.ContainerGreen>
          <S.ContainerRed>
            <button onClick={handleCloseCancel}>CANCELAR</button>
          </S.ContainerRed>
        </S.ContainerButton>
      </Modal>
    </>
  );
}
const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
  title: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  customButton: {
    marginTop: 30,
  },
  erroMessage: {
    color: "red",
    fontWeight: "bold",
  },
};

const stylecss = {
  content: {
    padding: 10,
    top: "50%",
    left: "50%",
    width: "400px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.30)",
    zIndex: 1000,
  },
};

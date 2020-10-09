import React, { useState, useEffect } from "react";

import Modal from "react-modal";

import * as S from "./styles";

Modal.setAppElement("#root");

export default function CadastroJogada({ onConfirm, msg }) {
  const [reg, setReg] = useState(null);

  useEffect(() => {
    const data = {
      id: 0,
      nome: "",
    };
    setReg(data);
  }, []);

  const handleCloseCancel = () => {
    onConfirm(false);
  };
  const handleSave = () => {
    onConfirm(true, reg);
  };
  const handleNome = (event) => {
    const lanc = reg;
    lanc.nome = event.target.value.toUpperCase();
    setReg(lanc);
  };

  return (
    <>
      <Modal isOpen={true} style={stylecss}>
        <header>
          <span style={styles.title}>{msg}</span>
        </header>

        <div className="row">
          <label className="active">Nome da Jogada</label>
          <input
            defaultValue={reg !== null && reg.nome}
            type="text"
            onChange={handleNome}
            autoFocus
            className="validate"
          />
        </div>

        <S.ContainerButton>
          <S.ContainerGreen>
            <button onClick={handleSave}>SALVAR</button>
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

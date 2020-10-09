import React, { useState, useEffect } from "react";

import Modal from "react-modal";

import * as S from "./styles";

Modal.setAppElement("#root");

export default function Resultado({ onConfirm, msg, result }) {
  const [hasData, setHasData] = useState(false);
  const handleClose = () => {
    onConfirm(false);
  };

  useEffect(() => {
    if (Boolean(result)) {
      setHasData(true);
    }
  }, [result]);
  return (
    <>
      <Modal isOpen={true} style={stylecss}>
        <header>
          {hasData ? (
            <span style={styles.title}>{msg}</span>
          ) : (
            <span style={styles.title}>ATENÇÃO</span>
          )}
        </header>

        <div className="row">
          {hasData ? (
            <>
              <label className="active">Jogador 1: {result.jogador1}</label>

              <label className="active">Jogador 2: {result.jogador2}</label>

              <label className="active">Jogador 3: {result.jogador3}</label>

              <h5>{result.jogadorVencedor}</h5>
            </>
          ) : (
            <span>
              TODOS OS PARÂMETROS SÃO NECESSÁRIOS PARA OBTER O RESULTADO!
            </span>
          )}
        </div>

        <S.ContainerButton>
          <S.ContainerGreen>
            <button onClick={handleClose}>OK</button>
          </S.ContainerGreen>
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

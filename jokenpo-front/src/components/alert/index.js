import React from "react";

import * as S from "./styles";

export default function Alert({ msg, desativar }) {
  const handleClose = () => {
    desativar(false);
  };
  return (
    <>
      <S.Container>
        <div className="alert warning">
          <span onClick={handleClose} className="closebtn">
            &times;
          </span>
          <strong>Atenção! </strong>
          <span>{msg}.</span>
        </div>
      </S.Container>
    </>
  );
}

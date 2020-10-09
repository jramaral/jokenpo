import React from "react";

import * as S from "./styles";

import Jokenpo from "../../assets/img/logo-fundo.png";

export default function Fundo() {
  return (
    <S.Container>
      <S.ContainerImg>
        <img src={Jokenpo} alt="Jokenpô Fundo de Tela" />
      </S.ContainerImg>
    </S.Container>
  );
}

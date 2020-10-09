import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import Logo from "../../assets/img/logo.png";
export default function Header() {
  return (
    <S.HeaderBase>
      <S.LadoEsquerdo>
        <Link to="/">
          <img src={Logo} alt="Logotipo jokenpo" />
        </Link>
      </S.LadoEsquerdo>
      <S.LadoDireito>
        <span className="dividir" />
        <Link to="/jogo">INICIAR JOGO</Link>
        <span className="dividir" />
        <Link to="/jogador">JOGADOR</Link>
        <span className="dividir" />
        <Link to="/jogada">TIPO JOGADA</Link>
        <span className="dividir" />
      </S.LadoDireito>
    </S.HeaderBase>
  );
}

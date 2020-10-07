import React, { useState } from "react";
import PageDefault from "./../../components/pageDefault";
import CadastroJogador from "./cadastro/index";

export default function Jogador() {
  const [openAlert, setOpenAlert] = useState(false);

  const handleConfirmClick = (trueOrFalse, children) => {
    setOpenAlert(trueOrFalse);
    console.log(children);
  };
  return (
    <PageDefault>
      <div className="container">
        <a
          class="waves-effect waves-light btn-large"
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
            <tr>
              <td>Alvin</td>
              <td>Eclair</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
            </tr>
          </tbody>
        </table>
      </div>
      {openAlert && (
        <CadastroJogador onConfirm={handleConfirmClick} msg="NOVO JOGADOR" />
      )}
    </PageDefault>
  );
}

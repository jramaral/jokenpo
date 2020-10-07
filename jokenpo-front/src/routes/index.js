import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Jogador from "./../pages/jogador";
import Jogada from "./../pages/tipoJogada";
import Jogo from "./../pages/jogo";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/jogo" component={Jogo} exact />
        <Route path="/jogador" component={Jogador} exact />
        <Route path="/jogada" component={Jogada} exact />
      </Switch>
    </BrowserRouter>
  );
}

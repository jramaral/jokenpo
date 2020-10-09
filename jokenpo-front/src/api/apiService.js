import axios from "axios";

const API_URL = "http://localhost:5000/api";

async function createJogador(parametro) {
  try {
    const res = await axios.post(`${API_URL}/jogador`, parametro);

    return res.data;
  } catch (error) {
    return error;
  }
}
async function getAllJogador() {
  const res = await axios.get(`${API_URL}/jogador`);

  return res.data;
}
async function removeJogador(parametro) {
  const res = await axios.delete(`${API_URL}/jogador/${parametro}`);

  return res.status;
}

async function createTipoJogada(parametro) {
  try {
    const res = await axios.post(`${API_URL}/jogada`, parametro);

    return res.data;
  } catch (error) {
    return error;
  }
}
async function getAllJogada() {
  const res = await axios.get(`${API_URL}/jogada`);

  return res.data;
}

async function removeJogada(parametro) {
  const res = await axios.delete(`${API_URL}/jogada/${parametro}`);

  return res.status;
}

async function getJogadorAndJogada() {
  const res = await axios.get(`${API_URL}/partida/lista`);

  return res;
}

async function createPartida(parametro) {
  try {
    if (Object.keys(parametro).length === 0) {
      return;
    }

    let vazio = false;

    Object.entries(parametro).forEach(([key, value]) => {
      if (!value) {
        vazio = true;
        return;
      }
    });

    if (vazio) {
      return;
    }

    const res = await axios.post(`${API_URL}/partida`, parametro);

    return res.data;
  } catch (error) {
    return error;
  }
}

export {
  createJogador,
  getAllJogador,
  createTipoJogada,
  getAllJogada,
  removeJogada,
  removeJogador,
  getJogadorAndJogada,
  createPartida,
};

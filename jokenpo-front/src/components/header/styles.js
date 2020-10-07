import styled from "styled-components";

export const HeaderBase = styled.header`
  background-color: #f0f0f0;
  display: flex;
  padding-right: 20px;
`;

export const LadoEsquerdo = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 40%;
    height: 90%;
  }
`;

export const LadoDireito = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      color: #e579;
    }
  }
`;

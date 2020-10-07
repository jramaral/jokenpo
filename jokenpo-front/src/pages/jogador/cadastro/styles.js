import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: flex-end;
`;

export const ContainerGreen = styled.div`
  margin-right: 20px;
  button {
    border-radius: 5px;
    font-family: Arial;
    color: #ffffff;
    font-size: 16px;
    background: #34d9bd;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #27a897;
    text-decoration: none;
  }
`;

export const ContainerRed = styled.div`
  button {
    border-radius: 5px;
    font-family: Arial;
    color: #ffffff;
    font-size: 16px;
    background: #d93434;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #a81919;
    text-decoration: none;
  }
`;

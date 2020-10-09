import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  margin-top: 10px;
  align-items: center;

  .alert {
    width: 100%;
    padding: 20px;
    background-color: #f44336;
    color: white;
    opacity: 1;
    transition: opacity 0.6s;
    margin-bottom: 15px;
  }
  .alert.warning {
    background-color: #ff9800;
  }

  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  .closebtn:hover {
    color: black;
  }
`;

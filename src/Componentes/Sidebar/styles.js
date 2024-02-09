import styled from "styled-components";

export const ContentLista = styled.div`
  background-color: #8d7e7a;
  width: 15%;
  height: 100%;
  position: fixed;

  @media (max-width: 800px) {
    width: 35%;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  width: 180px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Close = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  font-size: 20px;
  padding: 5px;
  color: white;
  cursor: pointer;
`;
export const Paragrafo = styled.div`
  font-size: 15px;
  height: 10px;

  @media (max-width: 1600px) {
    font-size: 14px;
    height: 5px;
    margin-left: 25px;
    margin-top: 10px;
  }
`;

export const SidBar = styled.div`
  background: #3b4b3e;
  display: flex;
  width: 3%;
  height: 100vh;
  position: fixed;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    width: 8%;
    height: 100%;
  }
`;

export const Icon = styled.div`
  color: #ffffff;
  margin-top: 20px;
  font-size: 30px;
`;

export const List = styled.div`
  outline: none;
  text-decoration: none;
  color: white;
`;

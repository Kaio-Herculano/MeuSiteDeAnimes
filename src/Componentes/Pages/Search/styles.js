import styled from "styled-components";

export const LogoAnimes = styled.h1`
  color: #49cd34;
  display: flex;
  font-size: 40px;
  text-decoration: none;
  outline: none;
  height: 0;
  @media (max-width: 800px) {
    width: 55%;
  }
`;
export const ApiResult = styled.div`
  height: 100vh;
  background-color: #473c3c;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  color: white;
  gap: 10px;
`;
export const TitleApi = styled.div`
  display: flex;
  color: #c8de9e;
  justify-content: center;
  width: 250px;
  align-items: center;
`;
export const Result = styled.h3`
  display: flex;
  background-color: #2a2728;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
`;

export const LogoHome = styled.span`
  display: flex;
  color: #eeff00;
  font-size: 50px;
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 10px;
`;

export const InputCustom = styled.input`
  border: none;
  border: transparent;
  outline: none;
  background: transparent;
  color: white;
`;

export const Lupa = styled.div`
  color: white;
`;
export const BarraBusca = styled.div`
  margin-top: 46px;
`;

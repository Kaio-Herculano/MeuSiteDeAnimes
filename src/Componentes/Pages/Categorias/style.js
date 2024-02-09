import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 25%;
  margin: top;
  width: 65%;
`;

export const Container = styled.div`
  display: block;
`;
export const Title = styled.h1`
  display: flex;
  color: darkorange;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 800px) {
    width: 95%;
    justify-content: center;
    align-items: center;
  }
`;

export const Imgs = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  justify-content: center;
  color: darkorange;
  text-decoration: none;
  outline: none;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 55px;
  align-items: center;
  flex-direction: column;
`;

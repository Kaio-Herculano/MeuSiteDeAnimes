import styled from "styled-components";
import Banner from "../../../Assets/img/banner.png";

export const ContentSearch = styled.div`
  background-image: url(${Banner});
  background-size: cover;
  background-size: cover;
  width: 100%;
  height: 68vh;
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    display: flex;

    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
  }
`;
export const Contenthome = styled.div`
  height: 100vh;
`;

export const Inicio = styled.h3`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Paragrafo1 = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  @media (max-width: 800px) {
    margin-left: 9%;
  }
`;

export const Paragrafo2 = styled.h4`
  display: flex;
  justify-content: center;
  color: #ebf3b6;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    margin-left: 12%;
    width: 85%;
  }
`;

export const Paragrafo3 = styled.div`
  background-color: aqua;
`;

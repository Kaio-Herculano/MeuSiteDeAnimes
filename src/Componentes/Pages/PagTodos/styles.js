import styled from "styled-components";

export const TitleCategory = styled.div`
  color: white;
  gap: 10px;
  display: flex;
  font-size: 25px;
  align-items: center;
  justify-content: center;
`;

export const TestImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-end;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LogoCategory = styled.div``;

export const Imgs = styled.div`
  padding: 25px;
  width: 25%;
`;

export const SetasPag = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 32px;
  padding: 100px;
`;
export const ButoonLeft = styled.div`
  border-radius: 10px;
  color: red;
  background-color: black;
  text-align: center;
  font-family: Font Awesome 5 Free;
  font-size: 23px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const ButoonRigth = styled.div`
  border-radius: 10px;
  color: red;
  background-color: black;
  text-align: center;
  font-family: Font Awesome 5 Free;
  font-size: 23px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const ImgHeader = styled.img`
  width: 100%;
`;

export const ImgInfo = styled.div`
  display: flex;
  color: aqua;
  gap: 50px;
  width: 85%;
  flex-wrap: wrap;
  align-items: center;
  color: #cac3a2;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  justify-content: center;

  @media (max-width: 800px) {
    margin-left: 50px;
    justify-content: center;
  }
`;
export const Trailer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TrailerButoon = styled.button`
  display: flex;
  background-color: black;
  color: red;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  width: 300px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Backshadow = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Deletemodal = styled.div`
  color: white;
  display: flex;
  font-size: 40px;
  width: 8%;
  justify-content: flex-start;
  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  color: white;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const Popcorn = styled.span`
  color: red;
`;
export const TrailerTamanho = styled.iframe`
  width: 560px;
  height: 315px;

  @media (max-width: 800px) {
    width: 350px;
    height: 350px;
  }
`;
export const SobreAnime = styled.div`
  width: 85%;
`;

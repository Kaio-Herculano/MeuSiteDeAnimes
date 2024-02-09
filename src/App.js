import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import AppRoutes from "./Router/Rotas";
import Carousel from "./Componentes/Carousel/Carousel";
import { countries } from "./Componentes/Carousel/data";
const Container = styled.div`
  color: white;
  margin: -8px;
  background-color: #473c3c;
`;

const Footer = styled.h1`
  background-color: #3b4b3e;
  color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18%;
  @media (max-width: 800px) {
    margin-top: 70%;
  }
`;

const RedesSociais = styled.a`
  outline: none;
  text-decoration: none;
  cursor: pointer;
  color: white;
`;
function App() {
  return (
    <>
      <Container>
        <AppRoutes />

        <Carousel images={countries} />
        <Footer>
          minhas redes sociais
          <FaInstagram />
          <RedesSociais href="https://instagram.com/kaioherculanosss">
            Instagran
          </RedesSociais>
        </Footer>
      </Container>
    </>
  );
}

export default App;

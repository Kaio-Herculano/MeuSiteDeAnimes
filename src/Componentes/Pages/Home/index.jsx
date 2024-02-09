import React from "react";
// vc tem o estilo ContentSearch  nele esta o seu backgroud image que esta faltando useo onde cahar melhor e tera ele em determinadas paginas
import { Contenthome, Inicio, Paragrafo1, Paragrafo2 } from "./styles";
import { FaHome } from "react-icons/fa";
import { FaFaceSmileWink } from "react-icons/fa6";

function Home() {
  return (
    <Contenthome>
      <Inicio>
        <FaHome /> pagina inicial
      </Inicio>

      <Paragrafo1>
        oi gentee, esse é o site que eu construi,"a minha netflix de animes"
      </Paragrafo1>

      <Paragrafo2>
        {" "}
        Aqui vc conseguira ver todos os animes que quiser.<br></br>
        Para comecar, aqui ao lado vc tera o menu lateral,<br></br> nele vooce
        tera as categorias dos animes que quiser assistir <br />
        indo um pouco ali para cima tera a barra de busca ali voce conseguira{" "}
        <br></br>o anime que quiser, ate por que tem disponiveis mais de 10 mil
        animes aqui
      </Paragrafo2>

      <Paragrafo2>
        tenha uma boa navegacao <FaFaceSmileWink />
      </Paragrafo2>
    </Contenthome>
  );
}
export default Home;

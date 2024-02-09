import React from "react";
import { Contenthome, Inicio, Paragrafo1, Paragrafo2 } from "./styles";
import { FaHome } from "react-icons/fa";
import { FaRegFaceSmileWink } from "react-icons/fa6";

function Home() {
  return (
    <Contenthome>
      <Inicio>
        <FaHome /> Página Inicial
      </Inicio>

      <Paragrafo1>
        Oi gente, este é o site que eu construí, "a minha Netflix de animes".
      </Paragrafo1>

      <Paragrafo2>
        Aqui você conseguirá ver todos os animes que quiser.<br></br>
        Para começar, aqui ao lado você terá o menu lateral,<br></br> nele você
        terá as categorias dos animes que quiser assistir. <br />
        Indo um pouco acima, terá a barra de busca onde você conseguirá{" "}
        <br></br>o anime que quiser, até porque temos disponíveis mais de 10 mil
        animes aqui.
      </Paragrafo2>

      <Paragrafo2>
        Tenha uma boa navegação <FaRegFaceSmileWink />
      </Paragrafo2>
    </Contenthome>
  );
}

export default Home;

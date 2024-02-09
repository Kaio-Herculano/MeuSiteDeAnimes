import { Container, Imgs, Logo, Title } from "./style";
import { useEffect, useState } from "react";
import {
  getAnimEspecific,
  getFiltroAnimesPorCategorias,
} from "../../../Services/query";
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router-dom";

import {
  Backshadow,
  Deletemodal,
  ImgHeader,
  ImgInfo,
  Popcorn,
  SobreAnime,
  Trailer,
  TrailerButoon,
} from "../PagTodos/styles";
import { GiPopcorn } from "react-icons/gi";
import { SiNetflix } from "react-icons/si";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Categorias = (categoryValue) => {
  const title = categoryValue?.categoryValue?.attributes?.slug;
  const [animes, setAnime] = useState([]);
  const [animeEspecifico, setAnimeEspecifico] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchAnimesCategory = async () => {
      const res = await getFiltroAnimesPorCategorias(title);
      setAnime(res?.data);
    };
    fetchAnimesCategory();
  }, [title]);

  useEffect(() => {
    const fetchAnimeEspecifico = async () => {
      const response = await getAnimEspecific();
      setAnimeEspecifico(response?.data);
    };
    fetchAnimeEspecifico();
  }, []);

  return (
    <>
      {animeEspecifico ? (
    <>
    <Title>
      <Popcorn>
        <GiPopcorn />
      </Popcorn>{" "}
      Sobre o seu anime....
    </Title>
    <ImgHeader
      src={
        animeEspecifico?.attributes?.coverImage?.tiny === null
          ? "notFoud"
          : animeEspecifico?.attributes?.coverImage?.small
      }
    />

    <ImgInfo>
      <img src={animeEspecifico?.attributes?.posterImage.medium} alt="" />
      <h2>{animeEspecifico?.attributes?.canonicalTitle}</h2>
      <SobreAnime>{animeEspecifico?.attributes?.synopsis}</SobreAnime>
    </ImgInfo>

    <Trailer>
      <TrailerButoon onClick={() => setModal(true)}>
        <SiNetflix /> VER TRAILER
      </TrailerButoon>

      {modal && (
        <Backshadow>
          <div>
            <div>
              <Deletemodal onClick={() => setModal(false)}>
                <IoIosCloseCircleOutline />
              </Deletemodal>
              <iframe
                src={`https://www.youtube.com/embed/${animeEspecifico?.attributes?.youtubeVideoId}`}
                title="Lady GaGa - Judas (  Gemyni Cover + Slowed Reverb )"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Backshadow>
      )}
    </Trailer>
  </>
      ) : (
        <Container>
          <Title>
            <Logo>
              <BiSolidCameraMovie />{" "}
            </Logo>
            <p>{categoryValue?.categoryValue?.attributes?.slug}</p>
          </Title>
          <Imgs>
           
            {animes?.map((item) => (
              <Link key={item.id} onClick={() => setAnimeEspecifico(item)}>
                <img 
             
                  src={item.attributes?.posterImage?.small}
                  alt={item.titles}
                />
              </Link>
            ))}
          </Imgs>
        </Container>
      )}
    </>
  );
};
export default Categorias;

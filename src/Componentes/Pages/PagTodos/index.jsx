import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFilm, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiPopcorn } from "react-icons/gi";
import {
  Backshadow,
  ButoonLeft,
  ButoonRigth,
  Deletemodal,
  ImgHeader,
  ImgInfo,
  Imgs,
  Popcorn,
  SetasPag,
  SobreAnime,
  TestImg,
  Title,
  TitleCategory,
  Trailer,
  TrailerButoon,
} from "./styles";

function Categorias() {
  const [data, setData] = useState([]);
  const [dataURL, setDataURL] = useState(
    "https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0"
  );
  const [nextPage, setNextPage] = useState("");
  const [prevtPage, setprevtPage] = useState(false);
  const [animeEspecifico, setAnimeEspecifico] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${dataURL}`)
      .then((res) => {
        setData(res.data.data);
        setNextPage(res?.data.links?.next);
        setprevtPage(res?.data.links?.prev);

        console.log(res.data);

        if (animeEspecifico) {
          setDataURL(animeEspecifico);
        }
      })
      .catch((error) => console.log(error));
  }, [animeEspecifico, dataURL]);

  return animeEspecifico ? (
    <>
      <Title>
        <Popcorn>
          <GiPopcorn />
        </Popcorn>{" "}
        Sobre o seu anime....
      </Title>
      <ImgHeader
        src={
          data?.attributes?.coverImage?.tiny === null
            ? "notFoud"
            : data?.attributes?.coverImage?.small
        }
      />

      <ImgInfo>
        <img src={data?.attributes?.posterImage.medium} alt="" />
        <h2>{data?.attributes?.canonicalTitle}</h2>
        <SobreAnime>{data?.attributes?.synopsis}</SobreAnime>
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
    <>
      <TitleCategory>
        <FaFilm /> Todos
      </TitleCategory>
      <TestImg>
        {data.map((item) => (
          <Imgs key={item.id}>
            <Link onClick={() => setAnimeEspecifico(item.links.self)}>
              <img src={item.attributes.posterImage.small} alt="" />
            </Link>
          </Imgs>
        ))}
      </TestImg>

      <SetasPag>
        {prevtPage && (
          <ButoonRigth onClick={() => setDataURL(prevtPage)}>
            <FaArrowLeft />
          </ButoonRigth>
        )}

        <ButoonLeft onClick={() => setDataURL(nextPage)}>
          <FaArrowRight />
        </ButoonLeft>
      </SetasPag>
    </>
  );
}

export default Categorias;

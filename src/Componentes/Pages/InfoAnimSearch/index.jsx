import { useEffect, useState } from "react";
import { getAnimEspecific } from "../../../Services/query";
import { useParams } from "react-router-dom";
import { Title } from "../Categorias/style";
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

const AnimeInfoSearch = () => {
  const [especifcAnim, setEspecifcAnim] = useState(null);
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const fetchAnimeEspecifico = async () => {
      const response = await getAnimEspecific(id);
      setEspecifcAnim(response?.data);
    };
    fetchAnimeEspecifico();
  }, [id]);

  return (
    <>
      <Title>
        <Popcorn>
          <GiPopcorn />
        </Popcorn>{" "}
        Sobre o seu anime....
      </Title>
      <ImgHeader
        src={
          especifcAnim?.attributes?.coverImage?.tiny === null
            ? "notFoud"
            : especifcAnim?.attributes?.coverImage?.small
        }
      />

      <ImgInfo>
        <img src={especifcAnim?.attributes?.posterImage.medium} alt="" />
        <h2>{especifcAnim?.attributes?.canonicalTitle}</h2>
        <SobreAnime>{especifcAnim?.attributes?.synopsis}</SobreAnime>
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
                  src={`https://www.youtube.com/embed/${especifcAnim?.attributes?.youtubeVideoId}`}
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
  );
};
export default AnimeInfoSearch;

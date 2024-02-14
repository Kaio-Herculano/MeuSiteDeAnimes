import {
  BarraBusca,
  DivInput,
  InputCustom,
  LogoAnimes,
  LogoHome,
  Lupa,
} from "./styles";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { GiLaurelCrown } from "react-icons/gi";
import { ContentSearch } from "../Home/styles";
const Input = ({ valueAnimes, setValueAnimes }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${valueAnimes}`);
  };

  return (
    <nav id="navbar">
      <ContentSearch>
        <LogoAnimes>
          <Link to={`/`}>
            <LogoHome>
              <GiLaurelCrown />
            </LogoHome>
          </Link>{" "}
          ksh animes{" "}
        </LogoAnimes>
        <BarraBusca>
          <form onSubmit={(e) => handleSubmit(e)}>
            <DivInput>
              <InputCustom
                type="text"
                placeholder="buscar animes"
                onChange={(e) => setValueAnimes(e.target.value)}
                value={valueAnimes}
              />
            </DivInput>
          </form>
        </BarraBusca>
      </ContentSearch>
    </nav>
  );
};
export default Input;

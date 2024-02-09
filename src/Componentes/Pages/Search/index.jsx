import { ApiResult, Result, TitleApi } from "./styles";
import { SiNetflix } from "react-icons/si";
import { useEffect, useState } from "react";
import { getSearchAnimes } from "../../../Services/query";
import { Popcorn } from "../PagTodos/styles";
import { Link } from "react-router-dom";

const Search = ({ valueAnimes, valueEspecific,  }) => {
  const [products, setProducts] = useState([]);

  const clickDoUsuario = (item) => {

  };

  useEffect(() => {
    async function loadProducts() {
      const res = await getSearchAnimes(valueAnimes);
      setProducts(res?.data);
    }

    loadProducts();
  }, [valueAnimes]);

  return valueAnimes !== "" ? (
    <Result>
      <ApiResult>
        {" "}
        <Popcorn>
          <SiNetflix />
        </Popcorn>{" "}
        Você digitou: {valueAnimes}
      </ApiResult>
      {products
        ?.filter((filteredAnimes) =>
          filteredAnimes.attributes.canonicalTitle
            .toLowerCase(valueAnimes.includes())
            .includes(valueAnimes.toLowerCase())
        )
        .map((product) => (
          <>
            <div key={product.id}>
              <Link
                to={`/AnimeEspecific/${product.id}`}
                onClick={() => clickDoUsuario(product)}
              >
                <img
                  src={product.attributes?.posterImage?.small}
                  alt={product.titles}
                />
              </Link>
              <TitleApi>{product.attributes.canonicalTitle}</TitleApi>
            </div>
          </>
        ))}
    </Result>
  ) : (
    <ApiResult>
      <p>Valor não encontrado</p>
    </ApiResult>
  );
};
export default Search;

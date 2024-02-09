import { useState, useEffect } from "react";
import { getAnimesCategorias } from "../../Services/query";
import { FaListUl } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  Close,
  ContentLista,
  Icon,
  List,
  Menu,
  Paragrafo,
  SidBar,
} from "./styles";

function Sidebar({ setValorClick }) {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const ClickDoUsuario = (item) => {
    setValorClick(item);
  };

  useEffect(() => {
    async function loadProducts() {
      const res = await getAnimesCategorias();

      setProducts(res.data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <SidBar onClick={() => setModal(true)}>
        <Icon>
          <FaListUl />
        </Icon>
      </SidBar>

      {modal === true && (
        <ContentLista>
          <div>
            <div onClick={() => setModal(false)}>
              <Close>
                <IoMdClose />
              </Close>
            </div>
            <Menu>
              CATEGORIAS
              <FaListUl />
            </Menu>

            {products?.map((product) => (
              <Paragrafo key={product?.id}>
                <Link
                  to={`/Categorias/${product.id}`}
                  onClick={() => ClickDoUsuario(product)}
                >
                  <List>{product?.attributes?.title}</List>
                </Link>
              </Paragrafo>
            ))}
            <Paragrafo>
              <Link to={`/TodosAnimes`}>Todos</Link>
            </Paragrafo>
          </div>
        </ContentLista>
      )}
      {}
    </>
  );
}
export default Sidebar;

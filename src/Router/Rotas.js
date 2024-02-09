import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Categorias from "../Componentes/Pages/Categorias";
import Search from "../Componentes/Pages/Search";
import Sidebar from "../Componentes/Sidebar";
import PagTodos from "../Componentes/Pages/PagTodos";
import Input from "../Componentes/Pages/Search/Input";
import Home from "../Componentes/Pages/Home";
import AnimeInfoSearch from "../Componentes/Pages/InfoAnimSearch";

const ContentRouter = styled.div``;

const AppRoutes = () => {
  const [valueAnimes, setValueAnimes] = useState("");
  const [valueClickList, setValueClickList] = useState([]);
  const [valueEspecific, setValueInfoEspecific] = useState([]);

  return (
    <ContentRouter>
      <React.Fragment>
        <BrowserRouter>
          <Sidebar
            valorClick={valueClickList}
            setValorClick={setValueClickList}
          />
          <Input setValueAnimes={setValueAnimes} valueAnimes={valueAnimes} />
          <Routes>
            <Route
              path="/search"
              element={
                <Search
                  valorEspecifico={valueEspecific}
                  valueAnimes={valueAnimes}
                  setValueAnimes={setValueAnimes}
                />
              }
            />
            <Route path="/" element={<Home />} />
            <Route
              path="/Categorias/:id"
              element={<Categorias categoryValue={valueClickList} />}
            />
            <Route path="/TodosAnimes" element={<PagTodos />} />
            <Route
              path="/AnimeEspecific/:id"
              element={
                <AnimeInfoSearch
                  valorEspecifico={valueEspecific}
                  setValorEspecifico={setValueInfoEspecific}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </ContentRouter>
  );
};

export default AppRoutes;

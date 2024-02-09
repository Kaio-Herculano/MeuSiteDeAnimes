import { api } from "./api";

export const getAnimesCategorias = async () => {
  try {
    const { data } = await api.get(
      `categories?page%5Blimit%5D=40&sort=-total_media_count`
    );

    return data;
  } catch (error) {
    return error;
  }
};

export const getAnimes = async (id) => {
  try {
    const { data } = await api.get(
      `https://kitsu.io/api/edge/categories/${id}/anime?page[limit]=20`
    );

    return data;
  } catch (error) {
    return error;
  }
};

export const getFiltroAnimesPorCategorias = async (title) => {
  try {
    const { data } = await api.get(`/anime?filter[categories]=${title}`);

    return data;
  } catch (error) {
    return error;
  }
};

export const getAnimeCategory = async (id) => {
  try {
    const { data } = await api.get(`/categories/${id}/relationships/anime`);

    return data;
  } catch (error) {
    return error;
  }
};

export const getTodosAnimes = async (url) => {
  try {
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    return error;
  }
};

export const getSearchAnimes = async (valueAnimes) => {
  try {
    const { data } = await api.get(
      `/anime?filter[text]=${valueAnimes}&page[limit]=20&page[offset]=0`
    );

    return data;
  } catch (error) {
    return error;
  }
};

export const getPagineit = async () => {
  try {
    const { data } = await api.get(
      `/anime?page%5Blimit%5D=20&page%5Boffset%5D=0`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getAnimEspecific = async (id) => {
  try {
    const { data } = await api.get(
      `anime/${id}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

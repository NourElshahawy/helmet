import api from "./axios";

export const getAbout = async () => {
    const {data} = await api.get("/home/about");
    return data;
  };
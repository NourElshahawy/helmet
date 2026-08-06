import api from "./axios";

export const getProvide = async () => {
    const { data } = await api.get("/offers");
    return data;
};

export default getProvide;
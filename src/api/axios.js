import axios from "axios";

const api = axios.create({
    baseURL: "https://helmet.site.jadara.work/api",

     headers: {
    Accept: "application/json",
    "Accept-Language": "ar",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
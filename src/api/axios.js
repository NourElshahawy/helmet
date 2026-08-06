import axios from "axios";

const api = axios.create({
    baseURL: "https://helmet.site.jadara.work/api",
    headers: { "Content-Type": "application/json" },
});

export default api;
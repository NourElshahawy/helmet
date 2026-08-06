import axios from "axios";

const api = axios.create({
    baseURL: "https://helmet.site.jadara.work/api",

    headers: {
        Accept: "application/json",
        "Accept-Language": "ar",
        // token: localStorage.getItem("userToken")
    }
});

export default api;
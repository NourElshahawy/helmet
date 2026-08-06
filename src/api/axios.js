import axios from "axios";

const api = axios.create({
    baseURL: "https://helmet.site.jadara.work/api",
<<<<<<< HEAD
    headers: {
            Accept: "application/json",
            "Accept-Language": "ar",
        
    }
=======

     headers: {
    Accept: "application/json",
    "Accept-Language": "ar",
    "Content-Type": "application/json",
  },
  timeout: 10000,
>>>>>>> 3c7225862ce69b6d611882700a80b7704724c0b0
});

export default api;
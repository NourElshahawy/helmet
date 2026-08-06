import axios from "axios";

const api = axios.create({
    baseURL: "https://helmet.site.jadara.work/api",
    headers: {
            Accept: "application/json",
            "Accept-Language": "ar",
        
    }
});

export default api;

//! ============== وبعدين في أي مكان: ============== //
// import api from "../api/api";

// async function getProducts() {
//     const response = await api.get("/products");
//     console.log(response.data);
// }


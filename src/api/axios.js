import axios from "axios";

const api = axios.create({
    baseURL: "https://your-real-api.com/api",
    headers: {
        token: localStorage.getItem("userToken")
    }
});

export default api;

//! ============== وبعدين في أي مكان: ============== //
// import api from "../api/api";

// async function getProducts() {
//     const response = await api.get("/products");
//     console.log(response.data);
// }


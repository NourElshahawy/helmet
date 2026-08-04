import axios from "axios";

const api = axios.create({
    baseURL: "baseURL",
    headers: {
        token: localStorage.getItem("userToken")
    }
});

//! ============== وبعدين في أي مكان: ============== //
// import api from "../api/api";

// async function getProducts() {
//     const response = await api.get("/products");
//     console.log(response.data);
// }


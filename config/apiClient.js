import axios from "axios";

const ApiClient = axios.create(
    {
        baseURL: process.env.API_URL
    }
)

export default ApiClient;
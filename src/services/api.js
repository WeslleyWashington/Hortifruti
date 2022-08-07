import axios from "axios";

const api = axios.create({
  baseURL: "https://www.fruityvice.com",
  headers: {"Access-Control-Allow-Origin" : "*"}
});

export default api;
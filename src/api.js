import axios from "axios";

const api = axios.create({
  baseURL: "https://infotrek23-backend.onrender.com/", // Replace with your API base URL
});

export default api;
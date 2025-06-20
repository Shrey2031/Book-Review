import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1/users", // 👈 points to your userRoutes prefix
});

export default instance;

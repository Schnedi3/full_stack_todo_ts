import axios from "axios";

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export default instance;

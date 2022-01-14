import axios from "axios";

const instance = axios.create({
  baseURL: "...", //the API (cloud functional)URl
});
export default instance;

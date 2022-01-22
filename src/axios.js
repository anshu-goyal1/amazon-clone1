import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-cd494/us-central1/api", //the API (cloud functional)URl
});
export default instance;

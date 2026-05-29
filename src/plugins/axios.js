import axios from "axios";

const baseURL = process.env.REACT_APP_NODEMAILER_URL;

console.log("Base URL:", baseURL);

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
import axios from "axios";

export const API_BASEURL = "https://e-commerce-server-code-production.up.railway.app";
const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL: API_BASEURL,
    headers:{
        "Authorization" : `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
})
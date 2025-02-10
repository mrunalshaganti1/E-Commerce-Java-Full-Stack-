import axios from "axios";

// export const API_BASEURL = "https://e-commerce-server-code-production.up.railway.app";
//export const API_BASEURL = "http://localhost:5454"
//export const API_BASEURL="http://server:5454"
export const API_BASEURL = process.env.REACT_APP_API_URL || "https://ecommerce.local/api"

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL: API_BASEURL, // Ensure this matches the backend URL
    headers: {
        Authorization: `Bearer ${jwt || ""}`,
        "Content-Type": "application/json",
    },
});
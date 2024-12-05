import axios from "axios";

// export const API_BASEURL = "https://e-commerce-server-code-production.up.railway.app";
export const API_BASEURL = "http://localhost:5454"
const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL: "http://localhost:5454", // Ensure this matches the backend URL
    headers: {
        Authorization: `Bearer ${jwt || ""}`,
        "Content-Type": "application/json",
    },
});
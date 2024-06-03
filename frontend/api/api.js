"use client";
import axios from "axios";

export const baseURL = "http://localhost:8000/api/";

export const clientUrl = "http://localhost:3000/";
import { getCookie } from "cookies-next";

let token;

const api = axios.create({
  withCredentials: true,
  baseURL,

  headers: {
    token: token ? token : getCookie("authToken"),
    "Content-Type": "application/json",
  },
});

export default api;

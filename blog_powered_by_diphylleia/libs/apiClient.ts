import axios from "axios";
import aspida from "@aspida/axios";
import api from "../api/$api";

const config = {
  headers: {
    "X-MICROCMS-API-KEY": !process.env.API_KEY,
  },
  baseURL: process.env.BASE_URL,
};

export const apiClient = api(aspida(axios, config));

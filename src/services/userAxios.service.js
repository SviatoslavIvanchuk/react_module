import baseURL from "../configs/usersUrls";
import axios from "axios";

export const usersAxiosService = axios.create({baseURL});


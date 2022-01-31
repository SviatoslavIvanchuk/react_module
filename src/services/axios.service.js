import axios from "axios";

import baseURL from "../configs/carsUrls";

const carsAxiosService = axios.create({baseURL});

export {carsAxiosService}
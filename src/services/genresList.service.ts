import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs";

export const genresListService = {
    getAll: () => axiosService.get(urls.genres+apiKey)
}
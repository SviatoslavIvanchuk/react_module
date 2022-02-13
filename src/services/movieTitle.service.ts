import {axiosService} from "./axios.service";
import {IMovieForTitle, IMovieInfo} from "../interfaces";
import {apiKey, urls} from "../configs";

export const movieTitleService = {
    getById:(id: any) => axiosService.get<IMovieInfo[]>(urls.movie+`/${id}?`+apiKey+'&append_to_response=videos'),
    getAllByPage:(page: any) => axiosService.get<IMovieForTitle[]>(urls.movies+apiKey+`&page=${page}`),
    getByGenre:(id: any) => axiosService.get<IMovieForTitle[]>(urls.movies+apiKey +`&with_genres=${id}`),
    getByGenreAndPage:(id: any, page: any) => axiosService.get<IMovieForTitle[]>
                        (urls.movies+apiKey +`&with_genres=${id}&page=${page}`),
    searchByTitle:(title: any) => axiosService.get<IMovieForTitle[]>(urls.search+'?'+apiKey+`&query=${title}`)
}

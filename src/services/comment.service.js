import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentService = {
  getAll:() => axiosService.get(urls.comments).then(value => value.data),
  getByPostId:(postId) => axiosService.get(`${urls.comments}?postId=${postId}`).then(value => value.data)
}
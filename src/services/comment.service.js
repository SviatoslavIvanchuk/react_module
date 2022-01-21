import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentService = {
  getByPostId:(postId) => axiosService.get(`${urls.comments}?postId=${postId}`).then(value => value.data)
}
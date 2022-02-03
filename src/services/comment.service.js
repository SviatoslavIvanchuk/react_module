import {usersAxiosService} from "./userAxios.service";
import {urls} from "../configs/usersUrls";

export const commentService = {
    getAll:() => usersAxiosService.get(urls.comments).then(value => value.data)
}
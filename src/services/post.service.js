import {usersAxiosService} from "./userAxios.service";
import {urls} from "../configs/usersUrls";


export const postService = {
    getAll:() => usersAxiosService.get(urls.posts).then(value => value.data)
}
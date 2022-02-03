import {usersAxiosService} from "./userAxios.service";
import {urls} from "../configs/usersUrls";


export const userService = {
    getAll:() => usersAxiosService.get(urls.users).then(value => value.data)
}
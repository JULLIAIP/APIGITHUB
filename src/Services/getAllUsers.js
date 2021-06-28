import { BASE_URL, client_id, client_secret } from "../Constants/apiRequest";
import axios from "axios";

export const getAll = (setUsers) => {
    axios
        .get(`${BASE_URL}/search/repositories?q=language%3AJava&sort=stars&page=1&${client_id}&${client_secret}`)
        .then((res) => {
            setUsers(res.data.items)

        })
        .catch((err) => {
            console.log(err.response)
        })
}
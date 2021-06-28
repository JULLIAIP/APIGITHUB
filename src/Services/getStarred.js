import axios from "axios";
import { BASE_URL, headers } from "../Constants/apiRequest"

 export const getStarred= (login, setRepos)=>{
     axios
 .get(`${BASE_URL}/users/${login}/starred`, headers)
 .then((res) => {
     console.log(res.data)
     setRepos(res.data)
 })
 .catch((err) => {
     console.log(err.response.data)
 })
}
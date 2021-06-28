import axios from "axios";
import { BASE_URL, headers } from "../Constants/apiRequest"

 export const getRepo= (login, setRepos)=>{
     axios
 .get(`${BASE_URL}/users/${login}/repos`, headers)
 .then((res) => {
     console.log(res.data)
     setRepos(res.data)
 })
 .catch((err) => {
     console.log(err.response.data)
 })
}
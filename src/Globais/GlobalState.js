import axios from "axios";
import { useState } from "react";
import { BASE_URL, headers } from "../Constants/apiRequest";
import { ContextWanted } from "./GlobalContext";

export const GlobalState = (props) => {

    const [wanted, setWanted] = useState([]);

    const getProfile = (username) => {

        axios
            .get(`${BASE_URL}/users/${username}`, headers)

            .then((res) => {
                setWanted(res.data)
            })
            .catch((err) => {
                alert("Este campo de busca não permite espaço")
            });
    }

    return (
        <ContextWanted.Provider value={{ getProfile, wanted, setWanted}}>
            {props.children}
        </ContextWanted.Provider>
    )

}

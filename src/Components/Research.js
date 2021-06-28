
import { FormResearch } from "../Components/styledComponents";
import { useContext, useState } from "react";
import { ContextWanted } from "../Globais/GlobalContext";


const Research = () => {

    const { getProfile, setWanted } = useContext(ContextWanted);

    const [userName, setUserName] = useState();


    const onSubmit = (e) => {
        e.preventDefault();
        getProfile(userName);
    }

    const setValue = (e) => {
        setUserName(e.target.value);
    }

    return (

        <FormResearch>
            <h1>Pesquisar por Nome</h1>

            <form onSubmit={onSubmit}>

                <input
                    value={userName}
                    onChange={setValue}
                    placeholder="digite o nome"
                    required
                >
                </input>

                <button><img src="https://image.flaticon.com/icons/png/512/64/64673.png" alt="icon-Research" /></button>
            </form>
        </FormResearch>
    )
}
export default Research

import { ContextWanted } from "../Globais/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { CardProfile, CardRepo, Container } from "./styledComponents";
import { getRepo } from "../Services/getRepo";
import { getStarred } from "../Services/getStarred";


const WantedProfille = () => {

    const { wanted } = useContext(ContextWanted);
    const [repos, setRepos] = useState([]);

    const toGoRepo = (login) => {
        getRepo(login, setRepos)
    }
    const toGoStarred = (login) => {
        getStarred(login, setRepos)
    }

    const showRepos = repos.map((repo) => {
        return <CardRepo key={repo.id}>
            <h1>Projeto: {repo.name}</h1>
            <h4>Forks: {repo.forks}</h4>
        </CardRepo>
    })

    return (
        <Container>

            <CardProfile>
            { wanted.avatar_url ? <div>
            <img src={wanted.avatar_url} alt="photo" />
                <div>
                <h1>{wanted.login} </h1>
                <h6>{wanted.location}</h6>
                </div>
                <p>Seguidores: {wanted.followers}</p>
                <p>seguindo: {wanted.following}</p>
                <p>{wanted.bio}</p>
                <button onClick={() => { toGoRepo(wanted.login) }}>Repositótios Publicos</button>
                <button onClick={() => { toGoStarred(wanted.login) }}>Starred </button>
              </div>  : <h1>Sem Pesquisas recentes</h1>
            }
            </CardProfile>

            <div>{showRepos}</div>

        </Container>
    )

}
export default WantedProfille
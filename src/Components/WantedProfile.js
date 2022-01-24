import { ContextWanted } from "../Globais/GlobalContext";
import { useContext, useState } from "react";
import { CardRepo, Container, InfoContain, MainContain } from "./styled";
import { getRepo } from "../Services/getRepo";
import { getStarred } from "../Services/getStarred";
import { Button } from "@material-ui/core";
//!ICONS
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

import CallSplitOutlinedIcon from "@material-ui/icons/CallSplitOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
const WantedProfille = () => {
  const { wanted } = useContext(ContextWanted);
  const [repos, setRepos] = useState([]);
  console.log(repos);

  const toGoRepo = (login) => {
    getRepo(login, setRepos);
  };
  const toGoStarred = (login) => {
    getStarred(login, setRepos);
  };

  const showRepos = repos.map((repo) => {
    return (
      <CardRepo key={repo.id}>
        <h3>
          <BookOutlinedIcon /> {repo.name}
        </h3>

        <p>{repo.description}</p>
        <h4>
          <CallSplitOutlinedIcon /> {repo.forks}
        </h4>
      </CardRepo>
    );
  });

  return (
    <Container>
      {wanted.avatar_url ? (
        <InfoContain>
          <div className="top">
            <img src={wanted.avatar_url} alt="photo-user" />
          </div>
          <h3>{wanted.login} </h3>
          <p>{wanted.bio}</p>
          <div>
            <PeopleOutlineIcon />
            <p>{wanted.followers} followers </p>.
            <p>{wanted.following} following </p>
          </div>
          <h64>
            <LocationOnOutlinedIcon /> {wanted.location}
          </h64>
          <div className="buttons-container">
            <Button
              onClick={() => {
                toGoRepo(wanted.login);
              }}
            >
              Repositótios Públicos
            </Button>
            <Button
              onClick={() => {
                toGoStarred(wanted.login);
              }}
            >
              Starred{" "}
            </Button>
            <hr />
          </div>{" "}
        </InfoContain>
      ) : (
        <h1>Sem Pesquisas recentes</h1>
      )}

      <MainContain>{showRepos}</MainContain>
    </Container>
  );
};
export default WantedProfille;

import Header from "../Components/Header";
import Research from "../Components/Research";
import WantedProfile from "../Components/WantedProfile";
import { Main } from "./styledPage";

const HomePage = () => {
  return (
    <div>
      <Header
        logo={"https://image.flaticon.com/icons/png/512/25/25231.png"}
        link={"https://github.com/JULLIAIP/desafio/compare/1.?expand=1"}
        name={"GITHUB"}
      />
      <Main>
        <Research label={"Pesquisar por nome"} />
        <WantedProfile />
      </Main>
    </div>
  );
};
export default HomePage;

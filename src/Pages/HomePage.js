import Header from "../Components/Header";
import Research from "../Components/Research";
import WantedProfile from "../Components/WantedProfile"
import { Main } from "./styledPage";



const HomePage = () => {


    return (
        <div>
            <Header />
            <Main>

                <Research />
                <WantedProfile />
            </Main>
        </div>
    )

}
export default HomePage

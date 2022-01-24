import { Head } from "./styled";

const Header = ({ name, logo, link }) => {
  return (
    <Head>
      <h1>{name}</h1>
      <a href={link}>
        <img src={logo} alt="logo" />
      </a>
    </Head>
  );
};
export default Header;

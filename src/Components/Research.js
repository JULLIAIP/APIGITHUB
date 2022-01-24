import { FormResearch } from "./styled";
import { useContext, useState } from "react";
import { ContextWanted } from "../Globais/GlobalContext";

import SearchIcon from "@material-ui/icons/Search";
import { Input } from "@material-ui/core";

const Research = ({ label }) => {
  const { getProfile, setWanted } = useContext(ContextWanted);

  const [userName, setUserName] = useState();

  const onSubmit = () => {
    getProfile(userName);
  };

  const setValue = (e) => {
    setUserName(e.target.value);
  };

  return (
    <FormResearch>
      <div className="form">
        <Input onChange={setValue} placeholder={label} required />

        <button onClick={onSubmit} type="submit">
          <SearchIcon />
        </button>
      </div>
    </FormResearch>
  );
};
export default Research;

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom'
import { ConfigContext } from "../App";

const Utente = () => {
  const history = useHistory();
  const utente = useContext(ConfigContext);

  const handleChangeUsername = (event) => {
    const { name, value } = event.target;
    utente.setUsername(value)
  };
  const handleChangeRepo = (event) => {
    const { name, value } = event.target;
    utente.setRepo(value)
  };

  const handleChangeUtente = (event) => {
    event.preventDefault();
    history.push(`/`);
  };

  return (
    <form className="flex flex-row" onSubmit={handleChangeUtente}>
      <div className="text-gray-600">
        <input
          onChange={handleChangeUsername}
          type="text"
          name="username"
          placeholder="Username"
          required
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
      </div>

      <div className="text-gray-600">
        <input
          onChange={handleChangeRepo}
          type="text"
          name="repo"
          required
          placeholder="Repository"
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none mx-5"
        />
      </div>

      <button type="submit" className="m-auto ">
        <FontAwesomeIcon icon={faSearch} className="text-white" />
      </button>
    </form>
  );
};

export default Utente;
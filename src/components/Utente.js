import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import globalvariables from "../globalVariables";

const Utente = () => {
  const [username, setUsername] = useState({ username: "marcodecarlo" });
  const [repo, setRepo] = useState({ repo: "reactgit" });

  const handleChangeUsername = (event) => {
    const { name, value } = event.target;
    setUsername({
      username: value,
    });
  };
  const handleChangeRepo = (event) => {
    const { name, value } = event.target;
    setRepo({
      repo: value,
    });
  };

  const handleChangeUtente = () => {
    globalvariables.username = username;
    globalvariables.repo = repo;
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

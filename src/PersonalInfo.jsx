import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "./context/UserContext";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const { user, setUser } = useContext(UserContext);
  function OnSave(event) {
    event.preventDefault();
    setUser({ name, age });
  }
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button
        onClick={(event) => {
          OnSave(event);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default PersonalInfo;

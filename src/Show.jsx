import React from "react";
import { useContext } from "react";
import UserContext from "./context/UserContext";

const Show = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return <div>{`Welcome ${user.name}`}</div>;
};
export default Show;

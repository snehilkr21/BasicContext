import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import PersonalInfo from "./PersonalInfo";
import Show from "./Show";
function App() {
  return (
    <UserContextProvider>
      <PersonalInfo />
      <Show />
    </UserContextProvider>
  );
}

export default App;

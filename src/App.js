import React from "react";
import { Routes, Route ,Navigate , Switch} from "react-router-dom";
// import "./App.css";
import Login from "./views/Login.js";
import Profile from "./views/Profile.js";
import AddQuestions from "./views/AddQuestions.js";
import Nav from "./layout/NavBar.js";
import { useSelector } from "react-redux";

const App = () => {
  const loggedIn = useSelector((state) => state.users.loggedIn);
  console.log(loggedIn);
  return (
    <div>
      {loggedIn ? <Nav /> : ""}
      <Routes>
        {/* {loggedIn ? <Navigate to="/Profile" /> : <Navigate to="/" /> } */}
        <Route path="/" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddQuestions" element={<AddQuestions />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
export default App;

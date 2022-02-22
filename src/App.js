import React from "react";
import { Routes, Route} from "react-router-dom";
// import "./App.css";
import Login from "./views/Login.js"
import Profile from "./views/Profile.js"
import AddQuestions from "./views/AddQuestions.js"
import Nav from "./layout/NavBar.js"

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddQuestions" element={<AddQuestions />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/main/main";
import NewUser from "./Components/NewUser/NewUser";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/user" element={<NewUser />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

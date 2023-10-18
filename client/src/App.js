import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar1 from "./Navbar1";
import Signup from "./Signup";
import Signin from "./Signin";
import Admin from "./Admin";
import User from "./User";
import Home from "./Home";
import { useEffect, useState } from "react";
import Pnf from "./Pnf";

function App() {
  const [userInfo, setUserInfo] = useState(() => {
    return JSON.parse(localStorage.getItem("userInfo"));
  });

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <div>
      <Navbar1 userInfo={userInfo} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={!userInfo ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/signin"
            element={
              !userInfo ? (
                <Signin setUserInfo={setUserInfo} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/team"
            element={
              !userInfo ? (
                <Navigate to="/" />
              ) : userInfo.role === "admin" ? (
                <Admin userInfo={userInfo} />
              ) : (
                <Navigate to="/books" />
              )
            }
          />
          <Route
            path="/books"
            element={
              !userInfo ? (
                <Navigate to="/" />
              ) : userInfo.role === "user" ? (
                <User userInfo={userInfo} />
              ) : (
                <Navigate to="/team" />
              )
            }
          />
          <Route path="*" element={<Pnf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

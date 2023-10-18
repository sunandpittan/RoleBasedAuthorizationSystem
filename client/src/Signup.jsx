import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    if (username && email && password && role) {
      if (document.getElementById("InputEmail").value.includes("@")) {
        const display = await axios.post("http://localhost:4000/signup", {
          username,
          email,
          password,
          role,
        });
        console.log(display.data);
        if (username === display.data.username) {
          navigate("/signin");
        } else if (display.data === "Username & email already exists") {
          document.getElementById("dispError").innerHTML =
            "Username & email already exists!";
        } else if (display.data === "Username already exists") {
          document.getElementById("dispError").innerHTML =
            "Username already exists!";
        } else if (display.data === "Email already exists") {
          document.getElementById("dispError").innerHTML =
            "Email already exists!";
        }
      } else {
        document.getElementById("dispError").innerHTML = "Incorrect Email!";
      }
    } else {
      document.getElementById("dispError").innerHTML =
        "All input fields are required!";
    }
  };

  return (
    <div className="w-50 mx-auto mt-3">
      <h1>Sign up</h1>
      <form className="border border-dark rounded p-3">
        <div className="mb-3">
          <label for="exampleInputUsername1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername1"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              document.getElementById("dispError").innerHTML = "";
            }}
          />
        </div>

        <div className="mb-3">
          <label for="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              document.getElementById("dispError").innerHTML = "";
            }}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              document.getElementById("dispError").innerHTML = "";
            }}
          />
        </div>

        <div className="mb-3 w-25">
          <label for="InputSelect" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="">Select</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <p id="dispError" className="text-danger"></p>
        <button type="submit" className="btn btn-dark" onClick={handleSignup}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;

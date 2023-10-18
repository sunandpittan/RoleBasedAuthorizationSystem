import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin({ userInfo }) {
  const navigate = useNavigate();
  const [teammembers, setTeammembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/teammembers", { headers: userInfo })
      .then((display) => {
        setTeammembers(display.data);
        if (display.data === "No token") {
          navigate("/signin");
        }
      });
  }, []);

  return (
    <div className="w-75 mx-auto mt-3">
      <h1 className="">Team members</h1>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {teammembers.map((t) => (
            <tr key={t._id}>
              <td>{t.name}</td>
              <td>{t.gender}</td>
              <td>{t.dob}</td>
              <td>{t.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;

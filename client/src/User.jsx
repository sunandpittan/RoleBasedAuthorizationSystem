import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User({ userInfo }) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/books", { headers: userInfo })
      .then((display) => {
        setBooks(display.data);
        if (display.data === "No token") {
          navigate("/signin");
        }
        console.log(display.data);
      });
  }, []);

  return (
    <div className="w-75 mx-auto mt-3">
      <h1 className="">Books</h1>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Publications</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b._id}>
              <td>{b.bookName}</td>
              <td>{b.author}</td>
              <td>{b.publicationsName}</td>
              <td>{b.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;

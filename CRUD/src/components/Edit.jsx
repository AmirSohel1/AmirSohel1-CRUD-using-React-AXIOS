import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://667b7ebabd627f0dcc92ca74.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then((res) => {
        navigate("/");
      });
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="mb-2 mt-2">
          <Link to="/">
            <button className="btn btn-primary">Read Data</button>
          </Link>
        </div>
        <div className="bg-primary p-4 text-center text-white">Update Data</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Enter Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="age">Enter Age:</label>
            <input
              type="text"
              id="age"
              placeholder="Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Enter Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;

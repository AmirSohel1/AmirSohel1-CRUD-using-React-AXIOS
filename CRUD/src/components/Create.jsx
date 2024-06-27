import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://667b7ebabd627f0dcc92ca74.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then((response) => {
        console.log(response.data);
        // Reset form fields
        console.log(name, email, age);
        setName("");
        setAge("");
        setEmail("");
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error posting the data!", error);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-2 mt-2">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center text-white">
            Create Data
          </div>
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
    </div>
  );
}

export default Create;

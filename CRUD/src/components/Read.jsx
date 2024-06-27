import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apidata, setapiData] = useState([]);

  const getData = () => {
    axios
      .get("https://667b7ebabd627f0dcc92ca74.mockapi.io/crud")
      .then((response) => {
        setapiData(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://667b7ebabd627f0dcc92ca74.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => console.log(err));
  };

  function setDatatoStorage(id, name, age, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="mb-2 mt-2">
          <Link to="/create">
            <button className="btn btn-primary">Create New Data</button>
          </Link>
        </div>
        <table className="table table-bordered table-striped table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apidata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.e_name}</td>
                <td>{item.e_age}</td>
                <td>{item.e_email}</td>
                <td>
                  <Link to={"/edit"}>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        setDatatoStorage(
                          item.id,
                          item.e_name,
                          item.e_age,
                          item.e_email
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;

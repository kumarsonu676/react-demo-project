import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { users } from "../../../models/users";
import axios from "axios";
import { config } from "../../../config/config";
import { authenticationService } from "../../../services/authentication.service";

export default function Teams() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${config.apiEndpoint}/api/student`,
      headers: {
        Authorization: `Bearer ${authenticationService.getToken()}`,
      },
    })
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  return (
    <>
      <h1 className="text-center">Our Team</h1>
      <div className="mt-3">
        <div className="row">
          {users.map((user, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <Link to={`/teams/${user.id}`} className="btn btn-primary">
                      Details Page
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

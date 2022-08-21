import React from "react";

const FlatInfo = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-primary">
        <div class="container-fluid">
          <ul class="navbar-nav ">
            <li class="nav-item fs-4">
              <a class="nav-link text-light " href="#">
                DashBoard
              </a>
            </li>
            <li class="nav-item fs-4">
              <a class="nav-link text-light" href="#">
                Flats
              </a>
            </li>
          </ul>
          <button className="navbar-right btn btn-primary text-light bg-dark">
            Sign Up
          </button>
        </div>
      </nav>
      <div className="d-flex justify-content-end m-2 text-light">
        <p className="bg-secondary p-1">Edit Entries</p>
      </div>

      <div className="m-1 p-1">
        <table className="table  table-bordered text-center ">
          <thead className="bg-primary">
            <tr>
              <th>FlatName</th>
              <th> Address </th>
              <th> Contact </th>
              <th> Total Rent </th>
              <th> Due </th>
              <th> Electricity Consumed </th>
              <th> Security </th>
              <th> Shifted On </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default FlatInfo;

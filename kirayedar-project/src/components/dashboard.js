import React from "react";

const Dashboard = () => {
  return (
    <div>
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

      <div className="card m-5" style={{ width: 180 }}>
        <div className="card-body ">
          <h6 className="card-subtitle mb-2 text-muted">Rent Per Month</h6>
          <h3 className="card-title">Rs. 5000</h3>
          <h6 className="card-subtitle mb-2 text-muted mt-4">Total Dues</h6>
          <h3 className="card-title">Rs. 5000</h3>
        </div>
      </div>
      <div className="m-5 p-5">
        <table className="table table-bordered text-center ">
          <thead className="bg-primary">
            <tr>
              <th>FlatName</th>
              <th> Dues </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary text-light">
          Add more..
        </button>
        <p className="d-flex justify-content-end m-5">
          <img
            className="img-fluid mx-1"
            src="plus.jpg"
            alt="naa"
            width={60}
            height={50}
          />
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

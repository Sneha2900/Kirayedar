import React from "react";

const Rent = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav ">
            <li class="nav-item fs-4">
              <a class="nav-link text-dark " href="#">
                Rent History
              </a>
            </li>
          </ul>
          <button className="navbar-right btn btn-light text-primary">
            View All
          </button>
        </div>
      </nav>
      <div className="m-1 p-1">
        <table className="table table-bordered text-center ">
          <thead className="bg-primary">
            <tr>
              <th>Date</th>
              <th> Flat No </th>
              <th> Rent Amount </th>
              <th colSpan={2}>Electricity</th>

              <th>Total</th>
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
            </tr>
            <tr>
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
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Rent;

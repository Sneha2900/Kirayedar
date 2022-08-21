import React from "react";

const Payment = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav ">
            <li class="nav-item fs-4">
              <a class="nav-link text-dark " href="#">
                Payment History
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
              <th> Name </th>
              <th> Amount Paid </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>xyz</td>
              <td>xyz</td>
            </tr>
            <tr>
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

export default Payment;

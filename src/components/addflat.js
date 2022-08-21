import React from "react";

const AddFlat = () => {
  return (
    <>
      <h4 className="d-flex justify-content-center ">Add Flat</h4>

      <nav className="navbar navbar-expand-sm bg-primary">
        <div className="container-fluid">
          <ul className="navbar-nav ">
            <li className="nav-item fs-4">
              <a className="nav-link text-light " href="#">
                DashBoard
              </a>
            </li>
            <li className="nav-item fs-4">
              <a className="nav-link text-light" href="#">
                Flats
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex justify-content-center">
        <div className="card m-5 " style={{ height: "480px", width: "600px" }}>
          <div className="card-body">
            <h3 className="card-title m-2">Add Your Flat</h3>
            <div className="m-5 ">
              <div className="row ">
                <div className="col-5">
                  <label htmlFor="first name">First Name</label>
                  <input
                    type="text"
                    className="form-control border border-primary"
                    id="first name"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-5 ">
                  <label htmlFor="last name">Last Name</label>
                  <input
                    type="text"
                    className="form-control border border-primary"
                    id="Last name"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <label htmlFor="tenant phone number">
                    Tenant Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="tenant phone number"
                    placeholder="tenant phone number"
                    required
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="Rent Per Month">Rent Per Month</label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Rent Per Month"
                    placeholder="Rent Per Month"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <label htmlFor="Electricity Start Unit">
                    Electricity Start Unit
                  </label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Electricity Start Unit"
                    placeholder="Electricity Start Unit"
                    required
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="Electricity Price Per Unit">
                    Electricity Price Per Unit
                  </label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Electricity Price Per Unit"
                    placeholder="Electricity Price Per Unit"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <label htmlFor="Security Bill">Security Bill</label>
                  <input
                    type="number"
                    className="form-control border border-primary"
                    id="Security Bill"
                    placeholder="Security Bill"
                    required
                  />
                </div>
                <div className="col-5">
                  <label htmlFor="Start Date">Start Date</label>
                  <input
                    type="date"
                    className="form-control border border-primary"
                    id="Start Date"
                    placeholder="Start Date"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-1">
              <button type="submit" class="btn btn-outline-primary btn-lg">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary btn-lg ms-3">
                Proceed . . .
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="d-flex justify-content-end m-5">
        <img
          className="img-fluid mx-1"
          src="plus.jpg"
          alt="naa"
          width={60}
          height={50}
        />
      </p>
    </>
  );
};
export default AddFlat;

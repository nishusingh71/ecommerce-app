import React from "react";
import { Link } from "react-router-dom";

const ProfileEdit = () => {
  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <h5>Profile Edit</h5>
        <Link to="/admin/dashboard" className="primary-btn">
          Back
        </Link>
      </div>
      <div className="card-body">
        <form action="">
          <div className="form-group mb-4">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="contact" className="mb-2">
              Contact Number
            </label>
            <input type="text" id="contact" className="form-control" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="pics" className="mb-2">
              Image
            </label>
            <input type="file" id="pics" className="form-control" />
          </div>
          <div className="row">
            <div className="col-sm-6 d-grid">
              <button
                className="primary-btn"
                style={{ borderStyle: "none" }}
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="col-sm-6 d-grid">
              <button className="btn btn-warning text-white" type="submit">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;

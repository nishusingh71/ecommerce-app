import React from "react";
import { Link } from "react-router-dom";
// import Breadcrumb from "../../../components/Breadcrum";

const DashBoard = () => {
  
  return (
    <>
      {/* <Breadcrumb /> */}
      <div className="card mb-5">
        <div className="card-header d-flex justify-content-between">
          <h5>Dashboard</h5>
          <Link to="/admin/profile-edit" className="primary-btn">
            Edit Profile
          </Link>
        </div>
        <div className="card-body">
          <p className="border-bottom">Name</p>
          <p className="border-bottom">Email</p>
          <p className="border-bottom">Contact Number</p>
          <p className="border-bottom">Image</p>
          <p className="border-bottom">Role</p>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

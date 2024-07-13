import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar";
import Breadcrumb from "../../components/Breadcrum";
import $ from "jquery";
const Auth = () => {
  useEffect(() => {
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
  }, []);
  return (
    <>
      <Breadcrumb />

      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-3">
            <Sidebar />
          </div>
          <div className="col-sm-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

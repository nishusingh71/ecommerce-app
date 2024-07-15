import React from "react";
import Input from "../components/Input";

export default function Contact() {
  return (
    <div className="mt-5" style={{maxWidth:"fit-content"}}>
      <div className="text-white ">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="row ">
        <div className="col-6 ms-4">
          <Input />
        </div>

        <div className="col-5 ms-2 mt-5 d-flex">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.190675150044!2d77.34472464112261!3d28.551880476912682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5dc86585451%3A0x51174afe6e4b2bd!2sSector-45%2C%20Noida%2C%20Uttar%20Pradesh%20201303!5e0!3m2!1sen!2sin!4v1720105192699!5m2!1sen!2sin"
            width="1200"
            height="400"
            style={{ border: "0;" }}
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Avatar } from "@mui/material";
export default function About() {
  return (
    <div>
      <h1 className="mt-4 text-center">About Us</h1>
      <div className="row d-flex">
        <div className="col-4 ms-4">
          <Avatar src="https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=220"/>
        </div>
        <div className="col mt-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            odio, provident iste facere distinctio praesentium fugit
            voluptatibus unde quam minus, id cupiditate impedit eius inventore
            cum voluptatem ex assumenda obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Input() {
  return (
    <div className="mt-4" >
      <form className="w-100">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput3" class="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="Enter Your Mobile Number"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Write Your Query Here
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3 mt-2">
          <button className="btn btn-primary w-100">Submit</button>
        </div>
      </form>
    </div>
  );
}

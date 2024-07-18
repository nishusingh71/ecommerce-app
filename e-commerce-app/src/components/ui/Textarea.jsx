import React from "react";

const Textarea = ({ formControl, inputChange }) => {
  return (
    <div
      className={
        formControl.required && formControl.touched && formControl.value === ""
          ? "form-group mb-4 text-danger"
          : "form-group mb-4 "
      }
    >
      <label htmlFor={formControl.name} className="mb-2">
        {formControl.name}
      </label>
      <textarea
        type="text"
        id={formControl.name}
        cols={10}
        className={
          formControl.required &&
          formControl.touched &&
          formControl.value === ""
            ? "form-control border-danger"
            : "form-control "
        }
        name="name"
        value={formControl.value}
        onChange={(event) => inputChange(event, formControl)}
      />
      {formControl.required &&
        formControl.touched &&
        formControl.value === "" && (
          <p className="mt-2 text-danger">{formControl.description}</p>
        )}
    </div>
  );
};

export default Textarea;

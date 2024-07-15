import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCategoryStart } from "../../../redux/actions/category.actions";
import { useFormData } from "../../../customHooks/useFormData";

const initialState = {
  name: {
    value: "",
    required: true,
    description: "Please enter name",
    touched: false,
  },
  image: {
    value: "",
    required: true,
    description: "Please select image",
    touched: false,
  },
  status: {
    value: "0",
    required: true,
    description: "Please select status",
    touched: false,
  },
};

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [formData, uploadFilesStatus, , inputChange, uploadFiles] = useFormData(
    initialState,
    "category"
  );
  let { name, status } = formData;
  const submit = (event) => {
    event.preventDefault();
    dispatch(addCategoryStart(formData));
    setTimeout(() => {
      navigate("/admin/category");
    }, 1000);
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>Add Category</h5>
        <Link to="/admin/category" className="primary-btn">
          Back
        </Link>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
              value={name.value}
              onChange={inputChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="image" className="mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              className="form-control"
              name="image"
              onChange={uploadFiles}
            />
            {formData.image && (
              <div className="mt-2">
                <img src={formData.image.value} alt="" height={"50px"} />
              </div>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="status" className="mb-2">
              Status
            </label>
            <select
              id="status"
              className="form-control"
              name="status"
              value={status.value}
              onChange={inputChange}
            >
              <option value="" hidden>
                Select Status
              </option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          <div className="row">
            <div className="col-sm-6 d-grid">
              <button
                type="submit"
                className="primary-btn"
                style={{ border: "none" }}
                disabled={uploadFilesStatus}
              >
                Submit
              </button>
            </div>
            <div className="col-sm-6 d-grid">
              <button
                type="reset"
                className="btn btn-warning text-white"
                disabled={uploadFilesStatus}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;

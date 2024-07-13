import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormData } from "../../../customHooks/useFormData";
import { updateCategoryStart } from "../../../redux/actions/category.actions";
const initialState = {
  name: "",
  image: "",
  status: "",
};
const EditCategory = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.category.categories);
  let [formData, uploadFilesStatus, setFormData, inputChange, uploadFiles] =
    useFormData(initialState, "category");
  let { name, image, status } = formData;
  const getCategoryById = (id) => {
    let category = categories.find((c) => c.id === id);
    if (category) {
      setFormData({
        name: category.name,
        image: category.image,
        status: category.status,
      });
    } else {
      navigate("/admin/category");
    }
  };
  const submit = (event) => {
    event.preventDefault();
    dispatch(updateCategoryStart(formData,id));
    setTimeout(() => {
      navigate("/admin/category");
    }, 1000);
  };
  useEffect(() => {
    if (!id) {
      navigate("/admin/category");
    }
    getCategoryById(id);
  }, [id]);
  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <h5>Edit Category</h5>
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
              value={name}
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
                <img src={formData.image} alt="" height={"50px"} />
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
              value={status}
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

export default EditCategory;

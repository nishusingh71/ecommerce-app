export const initialState = {
  name: {
    value: "",
    required: true,
    description: "Please enter name",
    touched: true,
    status: "",
  },
  image: {
    value: "",
    required: true,
    description: "Please select image",
    touched: false,
    status: "",
  },
  status: {
    value: "0",
    required: true,
    description: "Please select status",
    touched: false,
    status: "",
  },
  formStatus: "",
};

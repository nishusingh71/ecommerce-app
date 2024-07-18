import {
  ADD_PRODUCT_EROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_EROR,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_EROR,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_EROR,
  UPDATE_PRODUCT_START,
  UPDATE_PRODUCT_SUCCESS,
} from "../constants/product.constants";

// get product
export const getProductStart = () => ({
  type: GET_PRODUCT_START,
});

export const getProductSuccess = (product) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: product,
});

export const getProductError = (error) => ({
  type: GET_PRODUCT_EROR,
  payload: error,
});

// add product
export const addProductStart = (product) => ({
  type: ADD_PRODUCT_START,
  payload: product,
});

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const addProductError = (error) => ({
  type: ADD_PRODUCT_EROR,
  payload: error,
});

// update product
export const updateProductStart = (product, id) => ({
  type: UPDATE_PRODUCT_START,
  payload: {
    product,
    id,
  },
});

export const updateProductSuccess = (product, id) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: {
    product,
    id,
  },
});

export const updateProductError = (error) => ({
  type: UPDATE_PRODUCT_EROR,
  payload: error,
});

// delete product
export const deleteProductStart = (id) => ({
  type: DELETE_PRODUCT_START,
  payload: id,
});

export const deleteProductSuccess = (id) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

export const deleteProductError = (id) => ({
  type: DELETE_PRODUCT_EROR,
  payload: id,
});

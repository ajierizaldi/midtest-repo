import axios from "axios";

const getAll = () => {
  return axios.get("http://localhost:8080/products", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    }
  });
};

const get = id => {
  return axios.get(`http://localhost:8080/product/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    }
  });
};

const ProductService = {
  getAll,
  get
};

export default ProductService;
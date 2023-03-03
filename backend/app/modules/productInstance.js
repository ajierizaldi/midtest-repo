const axios = require("axios");

const instance = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {'content-type': 'application/json'}
})

const getProduct = () => {
    return instance.get("/product")
}

const getProductById = (id) => {
    return instance.put(`/product/` + id)
}

module.exports = {getProduct, getProductById};
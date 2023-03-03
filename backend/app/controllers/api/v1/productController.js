const { getProduct, getProductById } = require("../../../modules/productInstance")
const redis = require('../../../../config/redis')

module.exports = {
    getProductData: async (req, res) => {
        try {
            const redis_key = "get_product";
            const { reply } = await redis.get(redis_key);
            const response = await getProduct();
            const dataProduct = response.data;
            let result = dataProduct;
            if (reply) {
                // cache available
                res.status(200).send(reply);
            } else {
                // set redis cache
                redis.set(redis_key, JSON.stringify(result));
                res.status(200).send(result);
            }
        } catch (error) {
            console.log(error)
            res.send({
                status: false,
                message: error
            })
        }
    },

    getProductDataById: async (req, res) => {
        try {
            const id_number = Number(req.params.id);
            const redis_key = `get_product_by_id:${req.params.id}`;
            const { reply } = await redis.get(redis_key);
            const response = await getProductById(id_number);
            const dataProduct = response.data;
            let result = dataProduct;
            if (reply) {
                res.status(200).send(reply);
            } else {
                redis.set(redis_key, JSON.stringify(result));
                res.status(200).send(result);
            }
        } catch (error) {
            console.log(error)
            res.send({
                status: false,
                message: error
            })
        }
    }

}


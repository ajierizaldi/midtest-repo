import React, { useState, useEffect } from "react";
import CardDetail from "../components/card_detail";
import { useParams } from "react-router-dom";
import ProductService from "../app/service/product";
import { useSelector } from "react-redux";

export default function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState([])

    const { userInfo } = useSelector((state) => state.auth)

    if (!localStorage.getItem('userToken') || userInfo === null || userInfo.logged === false) {
        localStorage.removeItem('userToken')
        window.location = "/"
    }

    const getProduct = id => {
        ProductService.get(id)
            .then(response => {
                setProduct(response.data)
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id)
            getProduct(id);
    }, [id]);

    return (
        <div className="container">
            <div className="card-body">
                <br />
                <div className="row">
                    <CardDetail data-testid="list-item"
                        title={product.title}
                        price={product.price}
                        stock={product.stock}
                        rating={product.rating}
                        brand={product.brand}
                        description={product.description}
                        category={product.category}
                        cover={product.thumbnail}
                    />
                </div>
            </div>
        </div>
    );
}

import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { retrieveProduct } from "../features/product";
import Card from "../components/card";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);
  // console.log(product.length)

  const { userInfo } = useSelector((state) => state.auth)

  if (!localStorage.getItem('userToken') || userInfo === null || userInfo.logged === false) {
    localStorage.removeItem('userToken')
    window.location = "/"
  }

  const fetchData = useCallback(() => {
    dispatch(retrieveProduct());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const detail = (item) => {
    navigate(`/product/${item}`)
  }

  return (
    <div className="container">
      <div className="card mt-5">
        <h3 className="fw-semibold pt-lg-5 text-2xl mx-4" align="center">List Product</h3>
        <div className="card-body">
          <br />
          <div className="row">
            {product.map((item, index) => (
              <Card key={index} data-testid="list-item"
                title={item.title}
                price={item.price}
                cover={item.images[0]}
                onDetail={() => detail(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
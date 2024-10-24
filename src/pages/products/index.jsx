import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/features/productsSlice";
import { Col, Row, Spin } from "antd";
import ProductsCard from "../../components/ProductsCard";

const ProductListComponent = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productSlice);
  const { basket } = useSelector((state) => state.basketSlice);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (loading) {
    return <Spin />;
  }

  return (
    <Row gutter={[0, 48]} className="product-card" justify={"space-around"}>
      {products.length ? (
        products.map((product) => (
          <Col key={product.id} md={5}>
            <ProductsCard product={product} basket={basket} />
          </Col>
        ))
      ) : (
        <p>No products yet</p>
      )}
    </Row>
  );
};

export default ProductListComponent;

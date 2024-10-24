/* eslint-disable react/prop-types */
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { toggleProductInBasket } from "../redux/features/basketSlice";
const { Meta } = Card;

const ProductsCard = ({ product, basket }) => {
  const dispatch = useDispatch();

  const isInBasket = basket.some((p) => p.id === product.id);

  const handleToggleBasket = () => {
    dispatch(toggleProductInBasket(product));
  };
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={product?.image} />}
      actions={[
        <div onClick={handleToggleBasket} key={"basket"}>
          {isInBasket ? (
            <>
              <MinusCircleOutlined /> Remove from basket
            </>
          ) : (
            <>
              <PlusCircleOutlined /> Add to basket
            </>
          )}
        </div>,
      ]}
    >
      <Meta
        title={product.title}
        description={product.description.slice(0, 25) + "..."}
      />
    </Card>
  );
};
export default ProductsCard;

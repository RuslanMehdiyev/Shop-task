/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { List, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import { toggleProductInBasket } from "../redux/features/basketSlice";

const CartComponent = ({ basket }) => {
  const dispatch = useDispatch();

  const handleToggleBasket = (product) => {
    dispatch(toggleProductInBasket(product));
  };
  return (
    <div style={{ padding: "30px" }}>
      {basket.length ? (
        <List
          itemLayout="horizontal"
          dataSource={basket}
          renderItem={(product) => (
            <List.Item
              actions={[
                <Button
                  onClick={() => handleToggleBasket(product)}
                  type="primary"
                  key={"remove"}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={product.image} />}
                title={
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                }
                description={`Price: ${product.price} $`}
              />
            </List.Item>
          )}
        />
      ) : (
        <p>No items in the basket</p>
      )}
    </div>
  );
};

export default CartComponent;

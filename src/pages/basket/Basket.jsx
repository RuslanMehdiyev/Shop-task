import { useSelector } from "react-redux";
import CartComponent from "../../components/CartComponent";

const Basket = () => {
  const { basket } = useSelector((state) => state.basketSlice);

  return (
    <div>
      <CartComponent basket={basket} />
    </div>
  );
};

export default Basket;

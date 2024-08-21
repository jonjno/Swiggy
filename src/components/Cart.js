import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className='text-center m-4 p-10'>
      <h1 className='text-2l font-bold'>{cartItem}</h1>
    </div>
  );
};

export default Cart;

import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/CartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  // console.log(cart);
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;

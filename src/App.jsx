import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/CartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalComponent from "./components/ModalComponent";
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  //console.log(modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  // console.log(cart);
  return (
    <>
      {isOpen && <ModalComponent />}
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;

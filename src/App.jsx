import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
function App() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;

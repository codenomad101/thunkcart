import React, { useState } from "react";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/CartSlice";
import { useSelector } from "react-redux";
import ModalComponent from "./ModalComponent";
import { openModal } from "../features/cart/ModalSlice";
const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const [modalState, setModalState] = useState(false);

  if (cartItems.length < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total<span>${total}</span>
          </h4>
        </div>
      </footer>

      <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
        clear cart
      </button>
    </section>
  );
};

export default CartContainer;

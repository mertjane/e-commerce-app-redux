import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { HeaderWrapper, Logo, CartView } from "./Header.styled";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <HeaderWrapper>
      <Logo />
      <CartView>
        <AiFillShopping className="shopLogo"/>{" "}
        <div><span></span>₺ {cart.cartTotalAmount.toFixed(2)}</div>
      </CartView>
    </HeaderWrapper>
  );
};

export default Header;

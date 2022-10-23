import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { HeaderWrapper, Logo, CartView } from "./Header.styled";
import { useSelector } from "react-redux";

const logoStyle = {
  color: "white",
};

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <HeaderWrapper>
      <Logo />
      <CartView>
        <AiFillShopping size={25} style={logoStyle} />{" "}
        <span>₺ {cart.cartTotalAmount.toFixed(2)}</span>
      </CartView>
    </HeaderWrapper>
  );
};

export default Header;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCart } from "../../redux/cart/cartSlice";
import { getTotals } from "../../redux/cart/cartSlice";
import {
  CartBox,
  ItemBox,
  ItemInfo,
  ItemName,
  ItemPrice,
  CounterBox,
  DecrementBtn,
  IncrementBtn,
  Number,
  Divider,
  TotalBox,
  ResultText,
} from "./Cart.styled";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <CartBox>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your cart is currently empty</p>
        </div>
      ) : (
        cart.cartItems?.map((cartItem) => {
          return (
            <>
              <ItemBox key={cartItem.added}>
                <ItemInfo>
                  <ItemName>{cartItem.name}</ItemName>
                  <ItemPrice>₺ {cartItem.price}</ItemPrice>
                </ItemInfo>
                <CounterBox>
                  <DecrementBtn
                    onClick={() => dispatch(decreaseCart(cartItem))}
                  >
                    <FaMinus className="btnIco"/>
                  </DecrementBtn>
                  <Number>{cartItem.cartQuantity}</Number>
                  <IncrementBtn onClick={() => dispatch(addToCart(cartItem))}>
                    <FaPlus className="btnIco"/>
                  </IncrementBtn>
                </CounterBox>
              </ItemBox>
              <Divider />
            </>
          );
        })
      )}
      <TotalBox>
        <ResultText>₺ {cart.cartTotalAmount.toFixed(2)}</ResultText>
      </TotalBox>
    </CartBox>
  );
};

export default Cart;

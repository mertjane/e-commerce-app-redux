import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCart } from "../../redux/cart/cartSlice";
import { getTotals } from "../../redux/cart/cartSlice";
import {
  CartWrapper,
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

const controlStyle = {
  color: "#1EA4CE",
  size: "15",
  opacity: "0.7",
};

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <CartWrapper>
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
                      <FaMinus style={controlStyle} />
                    </DecrementBtn>
                    <Number>{cartItem.cartQuantity}</Number>
                    <IncrementBtn onClick={() => dispatch(addToCart(cartItem))}>
                      <FaPlus style={controlStyle} />
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
    </CartWrapper>
  );
};

export default Cart;

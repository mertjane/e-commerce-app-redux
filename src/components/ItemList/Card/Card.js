import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import mug from "..//..//..//assets/mug.png";
import shirt from "..//..//..//assets/shirt.png";
import {
  CardWrapper,
  ImgBox,
  Img,
  CardInfo,
  Cost,
  Name,
  AddBtn,
} from "./Card.styled";

const Card = ({ filtered }) => {
  const activeFilter = useSelector(
    (state) => state.items.filteredItems.activeFilter
  );
  const dispatch = useDispatch();
  return (
    <>
      {filtered.map((item) => {
        return (
          <CardWrapper key={item.added}>
            <ImgBox>
              <Img src={activeFilter === "shirts" ? shirt : mug} />
            </ImgBox>
            <CardInfo>
              <Cost>₺ {item.price}</Cost>
              <Name>{item.name}</Name>
              <AddBtn onClick={() => dispatch(addToCart(item))}>Add</AddBtn>
            </CardInfo>
          </CardWrapper>
        );
      })}
    </>
  );
};

export default Card;

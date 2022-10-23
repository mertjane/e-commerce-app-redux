import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveFilter } from "../../../redux/items/itemsSlice";
import {
  NavWrapper,
  NavTitle,
  BtnGroup,
  SelectionBtn,
} from "./ItemTypes.styled";

const ItemTypes = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(
    (state) => state.items.filteredItems.activeFilter
  );
  return (
    <NavWrapper>
      <NavTitle>Products</NavTitle>
      <BtnGroup>
        <SelectionBtn
          active={activeFilter === "mugs" ? "active" : null}
          onClick={() => dispatch(changeActiveFilter("mugs"))}
        >
          mugs
        </SelectionBtn>
        <SelectionBtn
          active={activeFilter === "shirts" ? "active" : null}
          onClick={() => dispatch(changeActiveFilter("shirts"))}
        >
          shirts
        </SelectionBtn>
      </BtnGroup>
    </NavWrapper>
  );
};

export default ItemTypes;

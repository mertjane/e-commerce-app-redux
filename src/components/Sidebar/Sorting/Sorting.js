import React from "react";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  StyledForm,
  Group,
  SortCheckBox,
  RadioButtonLabel,
} from "./Sorting.styled";
import {
  sortLowToHighAsync,
  sortHighToLowAsync,
  sortNewToOldAsync,
  sortOldToNewAsync,
} from "../../../redux/items/Services";

const Sorting = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      Sorting
      <StyledForm>
        <Group>
          <SortCheckBox
            onClick={() => dispatch(sortLowToHighAsync())}
            type="radio"
            value="lowToHigh"
            name="sorting"
          />
          <RadioButtonLabel htmlFor="lowToHigh" />
          <div>Price low to high</div>
        </Group>
        <Group>
          <SortCheckBox
            onChange={() => dispatch(sortHighToLowAsync())}
            type="radio"
            value="highToLow"
            name="sorting"
          />
          <RadioButtonLabel htmlFor="HighToLow" />
          <div>Price high to low</div>
        </Group>
        <Group>
          <SortCheckBox
            onChange={() => dispatch(sortNewToOldAsync())}
            type="radio"
            value="newToOld"
            name="sorting"
          />
          <RadioButtonLabel htmlFor="NewToOld" />
          <div>New to old</div>
        </Group>
        <Group>
          <SortCheckBox
            onChange={() => dispatch(sortOldToNewAsync())}
            type="radio"
            value="odToNew"
            name="sorting"
          />
          <RadioButtonLabel htmlFor="oldToNew" />
          <div>Old to new</div>
        </Group>
      </StyledForm>
    </Wrapper>
  );
};

export default Sorting;

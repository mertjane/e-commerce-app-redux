import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByTags } from "../../../redux/items/itemsSlice";
import { getProductsAsync } from "../../../redux/items/Services";
import Loading from "../../Loading/Loading";
import Error from "../../Error/Error";
import {
  Wrapper,
  StyledForm,
  StyledSearchBar,
  FilterBox,
  Group,
  SecondaryChkBox,
  StyledLabel,
} from "./Tags.styled";

const Tags = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.items.tags);
  const status = useSelector((state) => state.items.status);

  const [searchTags, setSearchTags] = useState("");

  return (
    <Wrapper>
      Tags
      <StyledForm>
        <StyledSearchBar
          onChange={(e) => setSearchTags(e.target.value)}
          type="text"
          placeholder="Search tag"
        />
        <FilterBox>
          <Group>
            <SecondaryChkBox
              onChange={() => dispatch(getProductsAsync())}
              name="tags"
              type="radio"
            />
            <StyledLabel />
            <div>All<span>({Object.keys(tags).length})</span></div>
          </Group>
          {status === "loading" && <Loading />}
          {status === "failed" && <Error />}
          {tags
            .filter((item) => {
              if (searchTags === "") {
                return item[0];
              } else if (
                item[0].toLowerCase().includes(searchTags.toLowerCase())
              ) {
                return item[0];
              }
              return false;
            })
            .map((item, index) => {
              return (
                <Group key={index}>
                  <SecondaryChkBox
                    onChange={() => dispatch(filterByTags(item[0]))}
                    type="checkbox"
                    name="tags"
                  />
                  <StyledLabel htmlFor={item[0]} />
                  <div>{item[0]}<span>({item[1]})</span></div>
                </Group>
              );
            })}
        </FilterBox>
      </StyledForm>
    </Wrapper>
  );
};

export default Tags;

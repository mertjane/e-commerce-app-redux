import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductsAsync,
  filterByBrandsAsync,
} from "../../../redux/items/Services";
import { selectedBrandValues } from "../../../redux/items/itemsSlice";
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
} from "./Brands.styled";

const Brands = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.items.brands);
  const status = useSelector((state) => state.items.status);

  const [searchBrands, setSearchBrands] = useState("");

  return (
    <Wrapper>
      Brands
      <StyledForm>
        <StyledSearchBar
          onChange={(e) => setSearchBrands(e.target.value)}
          type="text"
          placeholder="Search brand"
        />
        <FilterBox>
          <Group>
            <SecondaryChkBox
              onChange={() => dispatch(getProductsAsync())}
              type="radio"
              name="brands"
            />
            <StyledLabel />
            <div>
              All<span>({Object.keys(brands).length})</span>
            </div>
          </Group>
          {status === "loading" && <Loading />}
          {status === "failed" && <Error />}
          {brands
            .filter((item) => {
              if (searchBrands === "") {
                return item[0];
              } else if (
                item[0].toLowerCase().includes(searchBrands.toLowerCase())
              ) {
                return item[0];
              }
              return false;
            })
            .map((item, index) => {
              return (
                <Group key={index}>
                  <SecondaryChkBox
                    onClick={() => dispatch(selectedBrandValues(item[0]))}
                    onChange={() => dispatch(filterByBrandsAsync(item[0]))}
                    type="radio"
                    value={item[0]}
                    name="brands"
                  />
                  <StyledLabel htmlFor={item[0]} />
                  <div>
                    {item[0]}
                    <span>({item[1]})</span>
                  </div>
                </Group>
              );
            })}
        </FilterBox>
      </StyledForm>
    </Wrapper>
  );
};

export default Brands;

import { createSlice } from "@reduxjs/toolkit";
import {
  getProductsAsync,
  sortLowToHighAsync,
  sortHighToLowAsync,
  sortNewToOldAsync,
  sortOldToNewAsync,
  filterByBrandsAsync,
} from "./Services";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    products: [],
    tags: [],
    brands: [],
    filteredItems: {
      activeFilter: "all",
      selectedBrands: [],
      selectedTags: [],
      isChecked: false,
    },
    status: "idle",
    error: null,
  },
  reducers: {
    changeActiveFilter: (state, action) => {
      state.filteredItems.activeFilter = action.payload;
    },
    selectedBrandValues: (state, action) => {
      state.filteredItems.selectedBrands = action.payload;
    },
    filterByTags: (state, action) => {
      state.filteredItems.selectedTags = [
        action.payload,
        ...state.filteredItems.selectedTags,
      ];
      state.products = state.products.filter((item) =>
        item.tags.includes(action.payload)
      );
    },
  },
  extraReducers: {
    /************ GET PRODUCTS ****************/
    [getProductsAsync.pending]: (state) => {
      state.status = "loading";
    },
    [getProductsAsync.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = "succeeded";
      /**************  GET TAGS  ***************/
      // const allTags = state.products.reduce(
      //   (acc, item) => [...acc, ...item.tags],
      //   []
      // );
      // const uniqueTags = [...new Set(allTags)];
      // state.tags = uniqueTags;

      const slicedTags = state.products.reduce((acc, order) => {
        return {
          ...acc,
          [order.tags[0]]: (acc[order.tags[0]] || 0) + 1,
        };
      }, new Map());
      const newTagsList = Object.entries(slicedTags);
      const uniqueList = [...new Set(newTagsList)];
      state.tags = uniqueList;

      // let group = "tags"
      // const countedTags = state.products.reduce((acc, item) => {
      //   const key = item[group][0]
      //   const valueIfExist = acc[key] || 0;
      //   return {...acc, [key]: valueIfExist + 1}
      // }, new Map())
      // const newTagList = Object.entries(countedTags);

      /************ GET BRANDS ****************/
      const slicedBrands = state.products.reduce((acc, order) => {
        return {
          ...acc,
          [order.manufacturer]: (acc[order.manufacturer] || 0) + 1,
        };
      }, new Map());
      const newBrandList = Object.entries(slicedBrands);
      state.brands = newBrandList;
    },
    [getProductsAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    // sort LowToHigh
    [sortLowToHighAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [sortLowToHighAsync.fulfilled]: (state, action) => {
      state.products = [...action.payload];
      state.status = "succeeded";
    },
    [sortLowToHighAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    // sort HighToLow
    [sortHighToLowAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [sortHighToLowAsync.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = "succeeded";
    },
    [sortHighToLowAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    // sort NewToOld
    [sortNewToOldAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [sortNewToOldAsync.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = "succeeded";
    },
    [sortNewToOldAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    // sort OldToNew
    [sortOldToNewAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [sortOldToNewAsync.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = "succeeded";
    },
    [sortOldToNewAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    /*************** FILTER BY BRANDS ****************/
    [filterByBrandsAsync.pending]: (state) => {
      state.status = "loading";
    },
    [filterByBrandsAsync.fulfilled]: (state, action) => {
      state.products = [...action.payload];
      state.status = "succeeded";
    },
    [filterByBrandsAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { changeActiveFilter, selectedBrandValues, filterByTags } =
  itemsSlice.actions;
export default itemsSlice.reducer;

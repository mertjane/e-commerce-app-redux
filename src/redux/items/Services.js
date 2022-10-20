import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsAsync = createAsyncThunk(
  "items/getProducts",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/items`);
    return res.data;
  }
);
/******************** SORTING ITEMS *****************/
export const sortLowToHighAsync = createAsyncThunk(
  "items/sortProducts",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/items?_sort=price&_order=asc`
    );
    return res.data;
  }
);

export const sortHighToLowAsync = createAsyncThunk(
  "items/sortProducts",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/items?_sort=price&_order=desc`
    );
    return res.data;
  }
);

export const sortNewToOldAsync = createAsyncThunk(
  "items/sortProducts",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/items?_sort=added&_order=desc`
    );
    return res.data;
  }
);

export const sortOldToNewAsync = createAsyncThunk(
  "items/sortProducts",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/items?_sort=added&_order=asc`
    );
    return res.data;
  }
);

/******************** FILTERING BRANDS *****************/
export const filterByBrandsAsync = createAsyncThunk(
  "items/filterByBrands",
  async (selectedBrands) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/items?manufacturer_like=${selectedBrands}`
    );
    return res.data;
  }
);

/******************** FILTERING TAGS *****************/
// export const filterByTagsAsync = createAsyncThunk(
//   "items/filterByTags",
//   async (selectedTags) => {
//     const res = await axios(
//       `${process.env.REACT_APP_API_BASE_ENDPOINT}/items?tags_like=${selectedTags}`
//     );
//     return res.data;
//   }
// );

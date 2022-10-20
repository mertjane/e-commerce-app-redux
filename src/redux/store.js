import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./items/itemsSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        items: itemsSlice,
        cart: cartSlice,
    },
})
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice/basketSlice";
import restaurantReducer from "../features/restaurantSlice/restaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/Cake/cakeSlice";
import icecreamReducer from "../features/IceCream/icecreamSlice";
import userReducer from "../features/user/userSlice";
import reduxLogger from "redux-logger";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },

  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;

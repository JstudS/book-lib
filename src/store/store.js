import { configureStore } from "@reduxjs/toolkit";
import userStore from "./UserStore";
import libStore from "./LibStore";

export const store = configureStore({
    reducer: {
        userInfo: userStore,
        libStore: libStore
    },
  })
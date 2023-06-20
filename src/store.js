import { configureStore } from "@reduxjs/toolkit";
import characterID from "./reducer/characterID";

export default configureStore({
  reducer: {
    characterID: characterID,
  },
});

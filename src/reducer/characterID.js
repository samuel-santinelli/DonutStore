import { createSlice } from "@reduxjs/toolkit";

export const characterId = createSlice({
  name: "characterID",
  initialState: {
    id: "",
  },
  reducers: {
    data: (data, action) => {
      data.id = action.payload;
    },
  },
});

export const { data } = characterId.actions;
export default characterId.reducer;
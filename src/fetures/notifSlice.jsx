import { createSlice } from "@reduxjs/toolkit";

const notifSlice = createSlice({
  name: "notif",
  initialState: {
    message: "",
    color: "",
    counter: false,
  },
  reducers: {
    notif: (state, action) => {
      state.message = action.payload.message;
      state.color = action.payload.color;
      state.counter = action.payload.counter;
    },
  },
});

export const { notif } = notifSlice.actions;
export default notifSlice.reducer;

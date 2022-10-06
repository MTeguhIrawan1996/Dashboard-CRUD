import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarShow: true,
    unfoldable: false,
  },
  reducers: {
    hideShow: (state) => {
      state.sidebarShow = !state.sidebarShow;
    },
    unfoldableHideShow: (state) => {
      state.unfoldable = !state.unfoldable;
    },
  },
});

export const { hideShow, unfoldableHideShow } = sidebarSlice.actions;
export default sidebarSlice.reducer;

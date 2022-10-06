import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await axios.get("http://localhost:5000/products");
  return response.data;
});
export const saveUsers = createAsyncThunk(
  "user/saveUsers",
  async ({ name, phone, email }) => {
    const response = await axios.post("http://localhost:5000/products", {
      name,
      phone,
      email,
    });
    return response.data;
  }
);
export const deleteUsers = createAsyncThunk("user/deleteUsers", async (id) => {
  await axios.delete(`http://localhost:5000/products/${id}`);
  return id;
});
export const updateUsers = createAsyncThunk(
  "user/updateUsers",
  async ({ id, name, phone, email }) => {
    const response = await axios.put(`http://localhost:5000/products/${id}`, {
      name,
      phone,
      email,
    });
    return response.data;
  }
);

const userEntity = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: "user",
  initialState: userEntity.getInitialState(),
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      userEntity.setAll(state, action.payload);
    },
    [saveUsers.fulfilled]: (state, action) => {
      userEntity.addOne(state, action.payload);
    },
    [deleteUsers.fulfilled]: (state, action) => {
      userEntity.removeOne(state, action.payload);
    },
    [updateUsers.fulfilled]: (state, action) => {
      userEntity.updateOne(state, {
        id: action.payload.id,
        updates: action.payload,
      });
    },
  },
});

export const userSelectors = userEntity.getSelectors((state) => state.user);
export default userSlice.reducer;

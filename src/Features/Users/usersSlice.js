import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Mike Wazowski",
  },
  {
    id: 2,
    name: "Trevor Syndrome",
  },
  {
    id: 3,
    name: "Franklin Turquoise",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getAllUsers = (state) => state.users;

export default usersSlice.reducer;

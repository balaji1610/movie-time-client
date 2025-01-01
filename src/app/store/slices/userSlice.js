import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    userDetail: { name: "balaji" },
  },
  reducers: {
    clearData: (state) => {
      state.data = [];
    },
    updateName: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export const { clearData, updateName } = userSlice.actions;
export default userSlice.reducer;

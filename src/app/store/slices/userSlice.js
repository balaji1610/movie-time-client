import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserDetails } from "@/app/services/services";

export const fetchUserDetailsThunk = createAsyncThunk(
  "api/fetchUserDetails",
  async () => {
    const response = await fetchUserDetails();
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    userDetail: { name: "balaji" },
    portectedMessage: null,
  },
  reducers: {
    clearData: (state) => {
      state.data = [];
    },
    updateName: (state, action) => {
      state.userDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetailsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDetailsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.portectedMessage = action.payload;
      })
      .addCase(fetchUserDetailsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearData, updateName } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: ''
}

// const fetchUser = createAsyncThunk('user/fetchUser', async (url) => {
//   const response = await axios.get(url)
//   return response.data;
// })

const fetchUser = createAsyncThunk('user/fetchUser', (url) => {
  return axios.get(url)
  .then(res => res.data)
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = ''
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message
    })
  }
})

export default userSlice.reducer
export { fetchUser }
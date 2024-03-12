import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "user",
  initialState: {
    usuarioLogguer: null,
    isLoading: false,
  },
  reducers: {
    login: (state, action) => {
      state.usuarioLogguer = action.payload;
      state.isLoading = true;
    },
    logout: (state) => {
      state.usuarioLogguer = null;
      state.isLoading = false;
    },
  },
});

export const { login, logout } = usuarioSlice.actions;
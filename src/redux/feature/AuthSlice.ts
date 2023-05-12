import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface User {
  username: string;
}

interface Auth {
  activeUser: User | null;
}

const initialState: Auth = {
  activeUser: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, username: PayloadAction<string>) {
      const user: User = {
        username: username.payload
      }
      return {
        ...state,
        activeUser: user
      }
    },
    logout: (state) => ({ activeUser: null })
  }
});

export const { login, logout } = authSlice.actions;

export const selectActiveUser = (state: RootState) => state.auth.activeUser

export default authSlice.reducer;
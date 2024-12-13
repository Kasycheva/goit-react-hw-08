import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { setAuthHeader, clearAuthHeader } from "../../services/api";

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await axiosInstance.post("/users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axiosInstance.post("/users/login", credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axiosInstance.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("No token found");
  }

  try {
    setAuthHeader(token);
    const { data } = await axiosInstance.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

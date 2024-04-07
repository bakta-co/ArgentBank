import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { displayError } from './ErrorSlice';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  currentUser: undefined,
  userDetails: null,
  loading: false,
  error: null,
  token: null,
};



export const loginUser = createAsyncThunk(
  'auth/loginUser',
  ({ email, password, rememberMe }, { rejectWithValue, dispatch }) => {
   
    return axios.post('http://localhost:3001/api/v1/user/login', { email, password })
      .then(response => {
        const token = response.data.body.token;
        localStorage.setItem('token', token);
        window.location.href = "/profil";
        return response.data;
      })
      .catch(error => {
        dispatch(displayError("Erreur dans l'email ou le mot de passe. Veuillez réessayer."));
        return rejectWithValue(error);
      });
  }
);




export const userlogout = createAsyncThunk(
  'auth/logout',
  async () => {
    localStorage.removeItem('token');
  }
  
  )

const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {      
     

      state.isAuthenticated = true;
      state.token= localStorage.getItem('token');
     
       
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.currentUser = null;
      state.userDetails=null;
      localStorage.removeItem('token'); 
    },
    updateUserName: (state, action) => {
      state.userName = action.payload; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.currentUser = action.payload;
        state.token = action.payload.body.token;
        state.email = action.payload.email;
        state.userName = action.payload.userName;
        localStorage.setItem('token', state.token); 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        localStorage.removeItem('token'); 

      })

      .addCase(userlogout.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.currentUser = null; 
        state.userName=null;
        state.userDetails=null;
        localStorage.removeItem('token'); 
      });
      
  },
});


export const { logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

const initialState = {
  user: { email: "", name: "" },
  isLoading: true,
  // isError: false,
  success: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password, name }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });

    return data.user;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    //
    return data.user;
  }
);

export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
  const googleProvider = new GoogleAuthProvider();
  const data = await signInWithPopup(auth, googleProvider);

  return data.user;
});

export const logOut = createAsyncThunk("auth/logOut", async () => {
  const data = await signOut(auth);
  return data;
});

// Listen for changes in the user authentication state
export const checkAuthState = createAsyncThunk(
  "auth/checkAuthState",
  async () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        resolve(user);
      });
    });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.success = true;
        state.user.email = payload.email;
        state.user.name = payload.displayName;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.user.email = "";
        state.user.name = "";
        state.error = action.error.message;
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.success = true;
        state.user.email = payload.email;
        state.user.name = payload.displayName;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.user.email = "";
        state.user.name = "";
        state.error = action.error.message;
      })

      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = "";
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.success = true;
        state.user.email = payload.email;
        state.user.name = payload.displayName;
        state.error = "";
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.user.email = "";
        state.user.name = "";

        state.error = action.error.message;
      })

      .addCase(checkAuthState.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(checkAuthState.fulfilled, (state, { payload }) => {
        if (payload) {
          state.isLoading = false;
          state.user.email = payload.email;
          state.user.name = payload.displayName;
        } else {
          state.isLoading = false;
          state.user.email = "";
          state.user.name = "";
        }
      })
      .addCase(checkAuthState.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      //
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.error = "";
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.success = false;
        state.isLoading = false;
        state.user.email = "";
        state.user.name = "";
        state.error = "";
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.user.email = "";
        state.user.name = "";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;

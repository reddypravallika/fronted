import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


interface UserLoginForm {
  email: string;
  password: string;
}


export const GetUserLogin = createAsyncThunk(
    "User/UserLogin",
    async (form: UserLoginForm, { rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:8080/user-login", {
          method: "POST",
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Error in API request");
        }
  
        const resJson: any = await response.json();
  
        if (resJson.status === false) {
          throw new Error(resJson.msg);
        }
  
        return resJson;
      } catch (error:any) {
        return rejectWithValue(error.message);
      }
    }
  );
export const UserApplyLoans = createAsyncThunk(
    "User/UserApplyLoan",
    async (form:any, { rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:8080/apply-loan", {
          method: "POST",
          body: JSON.stringify( form),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Error in API request");
        }
  
        const resJson: any = await response.json();
  
        if (resJson.status === false) {
          throw new Error(resJson.msg);
        }
  
        return resJson;
      } catch (error:any) {
        return rejectWithValue(error.message);
      }
    }
  );
export const UserRegister = createAsyncThunk(
    "User/UserRegister",
    async (form: UserLoginForm, { rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:8080/user-register", {
          method: "POST",
          body: JSON.stringify( form),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Error in API request");
        }
  
        const resJson: any = await response.json();
  
        if (resJson.status === false) {
          throw new Error(resJson.msg);
        }
  
        return resJson;
      } catch (error:any) {
        return rejectWithValue(error.message);
      }
    }
  );
export const UserDetails = createAsyncThunk(
    "User/GetUserDetails",
    async (form, { rejectWithValue }) => {
      try {

        let token=sessionStorage.getItem("token")
        if(token){
          token=JSON.parse(token)
        }

        const response = await fetch("http://localhost:8080/user-profile", {
          method: "GET",
             headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

          },
        });
  
        if (!response.ok) {
          throw new Error("Error in API request");
        }
  
        const resJson: any = await response.json();
  
        if (resJson.status === false) {
          throw new Error(resJson.msg);
        }
  
        return resJson;
      } catch (error:any) {
        return rejectWithValue(error.message);
      }
    }
  );
export const UserGetLoan = createAsyncThunk(
    "User/GetGetLoan  ",
    async (form, { rejectWithValue }) => {
      try {

        let token=sessionStorage.getItem("token")
        if(token){
          token=JSON.parse(token)
        }

        const response = await fetch("http://localhost:8080/loans", {
          method: "GET",
             headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

          },
        });
  
        if (!response.ok) {
          throw new Error("Error in API request");
        }
  
        const resJson: any = await response.json();
  
        if (resJson.status === false) {
          throw new Error(resJson.msg);
        }
  
        return resJson;
      } catch (error:any) {
        return rejectWithValue(error.message);
      }
    }
  );


  export const userWithdraw = createAsyncThunk(
    "User/UserWithdraw",
    async (form: any, { rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:8080/check", {
          method: "POST",
          body: JSON.stringify( form),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Error in API request");
        }
  
        const resJson: any = await response.json();
  
        if (resJson.status === false) {
          throw new Error(resJson.msg);
        }
  
        return resJson;
      } catch (error:any) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  
interface UserLoginState {
  loading: boolean;
  result: any | null;
  error: string | null; // Changed error type to string
  //   token: string ;
}

const initialState: UserLoginState = {
  loading: false,
  result: null,
  error: null,
  
};

const auth = createSlice({
  name: "UserLogin",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    // =====================login=======================
    builder.addCase(GetUserLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(GetUserLogin.fulfilled, (state, action:any) => {
      console.log(action.payload.token,"action")
      state.loading = false;
      state.result = action.payload.token;
      state.error = null;
      toast.success(action.payload.msg);
      sessionStorage.setItem("token", JSON.stringify(action.payload.token));
      
    
    });
    builder.addCase(GetUserLogin.rejected, (state, action:any) => {
    //   console.log(action.payload,"error")
      toast.error(action.payload)
      state.loading = false;
      state.error = (action.payload as string) || "Backend error occurred";
    });
    // =====================Register=======================
    builder.addCase(UserRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UserRegister.fulfilled, (state, action:any) => {
      console.log(action.payload,"action")
      state.loading = false;
      // state.result = action.payload;
      state.error = null;
      // toast.success(action.payload.msg);
      sessionStorage.setItem("token", JSON.stringify(action.payload.token));
    
    });
    builder.addCase(UserRegister.rejected, (state, action:any) => {
    //   console.log(action.payload,"error")
      toast.error(action.payload)
      state.loading = false;
      state.error = (action.payload as string) || "Backend error occurred";
    });
    // =====================User Details=======================
    builder.addCase(UserDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UserDetails.fulfilled, (state, action:any) => {
      console.log(action.payload,"action")
      state.loading = false;
      state.result = action.payload;
      state.error = null;
      // toast.success(action.payload.msg);
      sessionStorage.setItem("user", JSON.stringify(action.payload));
    
    });
    builder.addCase(UserDetails.rejected, (state, action:any) => {
    //   console.log(action.payload,"error")
      toast.error(action.payload)
      state.loading = false;
      state.error = (action.payload as string) || "Backend error occurred";
    });
    // =====================User get loans=======================
    builder.addCase(UserGetLoan.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UserGetLoan.fulfilled, (state, action:any) => {
      console.log(action.payload,"action")
      state.loading = false;
      state.result = action.payload;
      state.error = null;
      // toast.success(action.payload.msg);
      // sessionStorage.setItem("user", JSON.stringify(action.payload));
    
    });
    builder.addCase(UserGetLoan.rejected, (state, action:any) => {
    //   console.log(action.payload,"error")
      toast.error(action.payload)
      state.loading = false;
      state.error = (action.payload as string) || "Backend error occurred";
    });
    // =====================User apply loan=======================
    builder.addCase(UserApplyLoans.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UserApplyLoans.fulfilled, (state, action:any) => {
      console.log(action.payload,"action")
      state.loading = false;
      state.result = action.payload;
      state.error = null;
      toast.success(action.payload.message);
      
    });
    builder.addCase(UserApplyLoans.rejected, (state, action:any) => {
    //   console.log(action.payload,"error")
      toast.error(action.payload)
      state.loading = false;
      state.error = (action.payload as string) || "Backend error occurred";
    });
    // =====================withdrawal loan=======================
    builder.addCase(userWithdraw.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userWithdraw.fulfilled, (state, action:any) => {

      console.log(action.payload,"action")
      state.loading = false;
      state.result = action.payload.updateBalance;
      state.error = null;
      // sessionStorage.setItem("user", JSON.stringify(action.payload.updateBalance));
      toast.success(action.payload.message);
      
    });
    builder.addCase(userWithdraw.rejected, (state, action:any) => {
    //   console.log(action.payload,"error")
      toast.error(action.payload)
      state.loading = false;
      state.error = (action.payload as string) || "Backend error occurred";
    });
  },
});
export default auth.reducer;

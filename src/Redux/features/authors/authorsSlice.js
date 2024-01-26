import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    loading:true,
    data:[],
    error:false
}

const fetchAuthors = createAsyncThunk("authorsSlice/fetchAuthors",()=>{
    let token = JSON.parse(localStorage.getItem("genz-admin")).access;

    return axios.get("https://gen-zsquare.com/api/author", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => response.data)
})


const authorsSlice = createSlice({
    name:"authors",
    initialState,
    extraReducers:(builder)=>{

        builder.addCase(fetchAuthors.pending,(state,action)=>{
            state.loading = true;
            state.error = false;
        })

        builder.addCase(fetchAuthors.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = false;
        })

        builder.addCase(fetchAuthors.rejected,(state,action)=>{
            state.loading = false;
            state.error = true;
        })

    }
})


export default authorsSlice.reducer;
export {fetchAuthors};
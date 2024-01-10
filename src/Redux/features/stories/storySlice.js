import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



let initialState = {
    loading:false,
    data:[],
    error:false
}



const fetchStory = createAsyncThunk('storySlice/fetchStory',()=>{
    return axios.get("https://gen-zsquare.com/api/stories").then(response=>response.data);
})


const storySlice = createSlice({
    name:"story",
    initialState,
    extraReducers:(builder)=>{
        
        builder.addCase(fetchStory.pending,(state)=>{
            state.loading = true;
            state.error = false;
        })

        builder.addCase(fetchStory.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = false;

            if(action.payload.length !== 0){

                action.payload = action.payload.map((item)=>{

                    let months =['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
                    let date = new Date(item.date_added?.split('.')[0])
            
                    let finaldate = `${months[date.getMonth()]}  ${date.getDate()},  ${date.getFullYear()}`;
    
                    item.date_added = finaldate;
    
                    return item;
            
                });
    
                state.data = action.payload;

            }else{

                state.data = action.payload;

            }

        })

        builder.addCase(fetchStory.rejected,(state)=>{
            state.loading = false;
            state.error = true;
        })

    }
})


export default storySlice.reducer;
export {fetchStory};
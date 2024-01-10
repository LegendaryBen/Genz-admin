import { configureStore } from "@reduxjs/toolkit";
import storySlice from "../features/stories/storySlice";


const store = configureStore({
    reducer:{
        story:storySlice
    }
})


export default store;
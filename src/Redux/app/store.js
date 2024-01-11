import { configureStore } from "@reduxjs/toolkit";
import storySlice from "../features/stories/storySlice";
import magazineSlice from "../features/magazine/magazineSlice";


const store = configureStore({
    reducer:{
        story:storySlice,
        magazine:magazineSlice
    }
})


export default store;
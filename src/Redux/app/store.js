import { configureStore } from "@reduxjs/toolkit";
import storySlice from "../features/stories/storySlice";
import magazineSlice from "../features/magazine/magazineSlice";
import authorsSlice from "../features/authors/authorsSlice";


const store = configureStore({
    reducer:{
        story:storySlice,
        magazine:magazineSlice,
        authors:authorsSlice
    }
})


export default store;
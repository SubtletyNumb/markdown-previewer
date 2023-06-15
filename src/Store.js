import { configureStore } from "@reduxjs/toolkit";
import editorSlice from "./Features/editorSlice/editorSlice";

export const store = configureStore({
reducer:{
 editor: editorSlice,
}
}
);
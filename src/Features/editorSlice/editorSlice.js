import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  input:'',
  defaultInput: '',
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload.text
      // console.log(state.input)
    },
    setDefaultInput: (state, {payload})=>{
      state.defaultInput = payload;
      state.input = state.defaultInput;
      // console.log(state.input)
    }
  }
  });

export default editorSlice.reducer;
export const { setInput,setDefaultInput } = editorSlice.actions;
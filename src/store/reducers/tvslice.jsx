import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info:null,
}

export const tvslice = createSlice({
 name:"tv",
 initialState,
 reducers:{
     loadtv : (state,action)=>{
      state.info=action.payload
     },
     removetv: (state)=>{
        state.info=null
     }
 }
})

export const {loadtv,removetv}=tvslice.actions
export default tvslice.reducer;
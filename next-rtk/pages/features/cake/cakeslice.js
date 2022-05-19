import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

const initialState={
    numbOfCakes:10
}

const cakeSlice =createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numbOfCakes--
        },
        restocked:(state,action)=>{
            state.numbOfCakes+=action.payload 
        }
    },

})

export default cakeSlice.reducer
export const {ordered,restocked}= cakeSlice.actions  
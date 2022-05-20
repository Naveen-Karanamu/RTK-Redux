import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type InitialState={
    numbOfCakes:number
}

const initialState:InitialState={
    numbOfCakes:10
}

const cakeSlice =createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numbOfCakes--
        },
        restocked:(state,action:PayloadAction<number>)=>{
            state.numbOfCakes+=action.payload 
        }
    },

})

export default cakeSlice.reducer
export const {ordered,restocked}= cakeSlice.actions  
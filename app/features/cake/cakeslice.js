const createSlice =require('@reduxjs/toolkit').createSlice

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

module.exports=cakeSlice.reducer
module.exports.cakeActions=cakeSlice.actions  
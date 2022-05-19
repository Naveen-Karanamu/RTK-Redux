const configureStore=require('@reduxjs/toolkit').configureStore
const cakeReducer=require("./features/cake/cakeslice")
const icecreamReducer=require("./features/icecream/icecreamSlice")
const userReducer=require('./features/user/userSlice')

const reduxLogger=require('redux-logger')

const logger=reduxLogger.createLogger()

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
    middleware:(getDefaultMiddlemare)=>getDefaultMiddlemare().concat(logger),
})

module.exports=store
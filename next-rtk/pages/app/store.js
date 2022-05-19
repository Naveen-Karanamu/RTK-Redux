import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from "../features/cake/cakeslice"
import icecreamReducer from "../features/icecream/icecreamSlice"
import userReducer from "../features/user/userSlice"

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

export default store
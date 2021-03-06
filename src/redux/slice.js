import {createSlice} from '@reduxjs/toolkit'

import axios from 'axios'
export const authSlice=createSlice({
    name:'auth',
    initialState:{
        isAuth:false,
        phone:'',
        data:''
    },
    reducers:{
        setLogin:(state,action)=>{
            state.isAuth=true;
            state.phone=action.payload
        },
        setLogout:(state,action)=>{
            state.isAuth=false;
            state.data=''
        },
        setData:(state,action)=>{
           state.data=action.payload
        }
    }
})

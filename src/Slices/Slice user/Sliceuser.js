import { createSlice } from '@reduxjs/toolkit'

export const SliceUser = createSlice({
  name: 'userdata',
  initialState: {
    user: JSON.parse(localStorage.getItem('userLogdin')) ? JSON.parse(localStorage.getItem('userLogdin')) : null ,
  },
  reducers: {
    userDdata : ( state , action)=>{
      state.user = action.payload
    },
   
  },
})


export const { userDdata } = SliceUser.actions

export default SliceUser.reducer
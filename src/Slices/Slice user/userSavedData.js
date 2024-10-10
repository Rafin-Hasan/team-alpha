import { createSlice } from '@reduxjs/toolkit'

export const SliceUserSaveData = createSlice({
  name: 'userdatasave',
  initialState: {
    userSaved: JSON.parse(localStorage.getItem('collections')) || [],
  },
  reducers: {
    SaveuserDdata : ( state , action)=>{
      state.user = action.payload
    },
   
  },
})


export const { SaveuserDdata } = SliceUserSaveData.actions

export default SliceUserSaveData.reducer
import { createSlice } from '@reduxjs/toolkit'

export const SliceUserHoldSaveData = createSlice({
  name: 'userdatasave',
  initialState: {
    userSavedhold: JSON.parse(localStorage.getItem('HoldOn')) || [],
  },
  reducers: {
    SaveuserDdatahold : ( state , action)=>{
      state.user = action.payload
    },
   
  },
})


export const { SaveuserDdatahold } = SliceUserHoldSaveData.actions

export default SliceUserHoldSaveData.reducer
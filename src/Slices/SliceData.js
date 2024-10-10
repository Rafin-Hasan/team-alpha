import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    clone: JSON.parse(localStorage.getItem('AlphaTeam')) ? JSON.parse(localStorage.getItem('AlphaTeam')) : null
  },
  reducers: {
    AlphateamData : ( state , action)=>{
      state.clone = action.payload
    },
   
  },
})


export const { AlphateamData } = counterSlice.actions

export default counterSlice.reducer

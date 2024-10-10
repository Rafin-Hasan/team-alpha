import { configureStore } from '@reduxjs/toolkit'
import shanto from './Slices/SliceData'
import XOXO from './Slices/Slice user/Sliceuser'
import save from './Slices/Slice user/userSavedData'
import savehold from './Slices/Slice user/savehold'


export default configureStore({
  reducer: {
    info: shanto,
    userinfo: XOXO,
    saveuserinfo: save,
    saveuserinfohold: savehold,
    
  },
})

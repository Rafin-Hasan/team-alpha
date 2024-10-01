import { configureStore } from '@reduxjs/toolkit'
import shanto from './Slices/SliceData'

export default configureStore({
  reducer: {
    info: shanto,
  },
})

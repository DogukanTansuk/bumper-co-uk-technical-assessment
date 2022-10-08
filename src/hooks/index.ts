// Redux Imports
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

// Util And Lib Imports
import {AppDispatch, RootState} from '../libs/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

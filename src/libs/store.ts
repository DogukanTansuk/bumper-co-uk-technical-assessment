import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import partnerRegReducer from '../features/partnerReg/partnerRegSlice'

export const reducers = combineReducers({
  counter: counterReducer,
  partnerReg: partnerRegReducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

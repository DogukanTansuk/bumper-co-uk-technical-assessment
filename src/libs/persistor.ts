//Package Imports
import {persistStore} from 'redux-persist'

//Util And Lib Imports
import {store} from './store'

export const persistor = persistStore(store)

//Package Imports
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/es/storage'

//Feature Imports
import {PartnerRegFormRequestModel, PartnerRegReducerModel} from './models'

const initialValues: PartnerRegReducerModel = {
  partners: [],
}

const {reducer, actions} = createSlice({
  name: 'partnerReg',
  initialState: initialValues,
  reducers: {
    addPartner: (
      state: PartnerRegReducerModel,
      {payload}: PayloadAction<PartnerRegFormRequestModel>
    ) => {
      state.partners = [...state.partners, payload]
    },
  },
})

export const {addPartner} = actions
export default persistReducer({storage, key: 'partnerRegKey', whitelist: ['partners']}, reducer)

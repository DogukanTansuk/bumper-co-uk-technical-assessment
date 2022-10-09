// Package Imports
import {Dispatch} from 'react'

// Feature Imports
import {PartnerRegFormRequestModel} from './models'
import {DealerShip} from './apis'
import {addPartner} from './partnerRegSlice'

export const partnerRegAction =
  (partnerRegModel: PartnerRegFormRequestModel) => async (dispatch: Dispatch<any>) => {
    const dealerShipResponse = await DealerShip(partnerRegModel)

    if (dealerShipResponse?.message === 'SUCCESS') {
      dispatch(addPartner(partnerRegModel))
      return true
    } else return false
  }

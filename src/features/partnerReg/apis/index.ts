// Util and Lib Imports
import {requests} from '../../../libs/axios'

//Feature Imports
import {PartnerRegFormRequestModel} from '../models'

export const DealerShip = (dealerShip: PartnerRegFormRequestModel) =>
  requests.post<any>('/dealership/reg/sandbox', dealerShip)

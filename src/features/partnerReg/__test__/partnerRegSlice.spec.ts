// Feature Imports
import {PartnerRegReducerModel} from './../models/partnerRegReducerModel'
import partnerRegReducer, {addPartner} from '../partnerRegSlice'
import {PartnerRegFormRequestModel} from '../models'
import {fireEvent, screen} from '@testing-library/react'

describe('partnerReg reducer test', () => {
  const initialState: PartnerRegReducerModel = {
    partners: [],
  }

  it('should handle initial state', () => {
    expect(partnerRegReducer(undefined, {type: 'unknown'})).toEqual({
      partners: [],
    })
  })

  it('should handle addPartner', () => {
    const examplePartner: PartnerRegFormRequestModel = {
      name: 'Hello',
      company: 'Hello',
      mobile_phone: '07123789456',
      email_address: 'alo@alo.com',
      postcode: 'ec1n',
      pay_later: 'false',
      pay_now: 'true',
    }

    const actual = partnerRegReducer(initialState as any, addPartner(examplePartner))
    expect(actual.partners).toHaveLength(1)
  })
})

// Feature Imports
import partnerRegReducer, {addPartner} from '../partnerRegSlice'
import {PartnerRegFormRequestModel, PartnerRegReducerModel} from '../models'
import {DealerShipListComponent} from '../components'
import {render} from '@testing-library/react'
import {Provider} from 'react-redux'
import {store} from '../../../libs/store'

describe('This test should render DealerShipListComponent with 2 DealerShipComponent', () => {
  it('it should render DealerShipList with two element', () => {
    const element = render(
      <Provider store={store}>
        <DealerShipListComponent searchQuery='' />
      </Provider>
    )

    const initialState: PartnerRegReducerModel = {
      partners: [
        {
          name: 'Hello',
          company: 'Hello',
          mobile_phone: '07123789456',
          email_address: 'alo@alo.com',
          postcode: 'ec1n',
          pay_later: 'false',
          pay_now: 'true',
        },
        {
          name: 'Hello',
          company: 'Hello',
          mobile_phone: '07123789456',
          email_address: 'alo@alo.com',
          postcode: 'ec1n',
          pay_later: 'false',
          pay_now: 'true',
        },
      ],
    }

    const actual = partnerRegReducer(initialState as any, {type: 'unkown'})
    expect(actual.partners).toHaveLength(2)
  })
})

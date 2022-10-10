// Package Imports
import {Provider} from 'react-redux'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'

// Util and Lib Imports
import {store} from '../../../libs/store'

// Feature Imports
import PartnerRegFormComponent from '../components/PartnerRegFormComponent'
import {PartnerRegFormRequestModel, PartnerRegReducerModel} from '../models'

// Adding Fontawesome Packages to Test
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

describe('renders PartnerRegFormComponent', () => {
  const initialState: PartnerRegReducerModel = {
    partners: [],
  }

  it('renders PartnerRegFormComponent', () => {
    render(
      <Provider store={store}>
        <PartnerRegFormComponent />
      </Provider>,
      {wrapper: BrowserRouter}
    )

    const joinOurNetwork = screen.getAllByText('Join our network')
    expect(joinOurNetwork).toHaveLength(2)
  })

  it('it should register to system with example value', async () => {
    const handleSubmit = jest.fn()

    const element = render(
      <Provider store={store}>
        <PartnerRegFormComponent />
      </Provider>,
      {wrapper: BrowserRouter}
    )

    const examplePartner: PartnerRegFormRequestModel = {
      name: 'Cindoruk',
      company: 'Hello',
      mobile_phone: '07123789456',
      email_address: 'alo@alo.com',
      postcode: 'ec1n',
      pay_later: 'false',
      pay_now: 'true',
    }

    const {getByLabelText, queryAllByText} = screen

    const {type, click} = userEvent.setup()
    await type(getByLabelText(/Name/i), examplePartner.name)
    await type(getByLabelText(/Company/i), examplePartner.company)
    await type(getByLabelText(/Mobile phone number/), examplePartner.mobile_phone)
    await type(getByLabelText(/EMail address/i), examplePartner.email_address)
    await type(getByLabelText(/Postcode/i), examplePartner.postcode)

    fireEvent.click(queryAllByText('PayLater')[0])
    fireEvent.click(queryAllByText('PayLater')[1])

    const submitButton = element.container.querySelector('button[type="submit"]')
    await waitFor(() => {
      click(submitButton!)
    })

    expect(handleSubmit).toHaveBeenCalledWith(examplePartner)
  })
})

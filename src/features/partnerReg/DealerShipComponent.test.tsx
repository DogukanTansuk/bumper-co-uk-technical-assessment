// Package Imports
import {render, screen} from '@testing-library/react'

// Feature Imports
import {DealerShipComponent} from './components/DealerShipComponent'
import {PartnerRegFormRequestModel} from './models'

describe('it should render DealerShipComponent correctly', () => {
  const examplePartner: PartnerRegFormRequestModel = {
    name: 'Hello',
    company: 'Hello',
    mobile_phone: '07123789456',
    email_address: 'alo@alo.com',
    postcode: 'ec1n',
    pay_later: 'false',
    pay_now: 'true',
  }

  render(<DealerShipComponent partner={examplePartner} />)
  const nameValue = screen.getByText('Hello')
  expect(nameValue).toContainHTML('Hello')

  const companyDisplay = screen.getByTestId('company-display')
  expect(companyDisplay).toBeInTheDocument()
  const companyValue = screen.getByTestId('company-value')
  expect(companyValue).toContainHTML('Hello')

  const mobilePhoneNumberDisplay = screen.getByTestId('mobile-phone-number-display')
  expect(mobilePhoneNumberDisplay).toBeInTheDocument()
  const mobilePhoneNumberValue = screen.getByTestId('mobile-phone-number-value')
  expect(mobilePhoneNumberValue).toContainHTML('07123789456')

  const emailAddressDisplay = screen.getByTestId('email-address-display')
  expect(emailAddressDisplay).toBeInTheDocument()
  const emailAddressValue = screen.getByTestId('email-address-value')
  expect(emailAddressValue).toContainHTML('alo@alo.com')

  const postcodeDisplay = screen.getByTestId('postcode-display')
  expect(postcodeDisplay).toBeInTheDocument()
  const postcodeValue = screen.getByTestId('postcode-value')
  expect(postcodeValue).toContainHTML('ec1n')
})

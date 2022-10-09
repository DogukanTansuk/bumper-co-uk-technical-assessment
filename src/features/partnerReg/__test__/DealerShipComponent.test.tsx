// Package Imports
import {render, screen} from '@testing-library/react'

// Feature Imports
import {DealerShipComponent} from '../components/DealerShipComponent'
import {PartnerRegFormRequestModel} from '../models'

const examplePartner: PartnerRegFormRequestModel = {
  name: 'Cindoruk',
  company: 'Hello',
  mobile_phone: '07123789456',
  email_address: 'alo@alo.com',
  postcode: 'ec1n',
  pay_later: 'false',
  pay_now: 'true',
}

test('it should render DealerShipComponent correctly', () => {
  render(<DealerShipComponent partner={examplePartner} />)

  const nameValue = screen.getByText('Cindoruk')
  expect(nameValue).toBeInTheDocument()

  const companyDisplay = screen.getByText('Company')
  expect(companyDisplay).toBeInTheDocument()
  const companyValue = screen.getByText('Hello')
  expect(companyValue).toBeInTheDocument()

  const mobilePhoneNumberDisplay = screen.getByText('Mobile phone number')
  expect(mobilePhoneNumberDisplay).toBeInTheDocument()
  const mobilePhoneNumberValue = screen.getByText('07123789456')
  expect(mobilePhoneNumberValue).toBeInTheDocument()

  const emailAddressDisplay = screen.getByText('Email address')
  expect(emailAddressDisplay).toBeInTheDocument()
  const emailAddressValue = screen.getByText('alo@alo.com')
  expect(emailAddressValue).toBeInTheDocument()

  const postcodeDisplay = screen.getByText('Postcode')
  expect(postcodeDisplay).toBeInTheDocument()
  const postcodeValue = screen.getByText('ec1n')
  expect(postcodeValue).toBeInTheDocument()
})

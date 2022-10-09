import {render, screen} from '@testing-library/react'
import {PartnerRegFormComponent} from '../components/PartnerRegFormComponent'

test('renders PartnerRegFormComponent', () => {
  render(<PartnerRegFormComponent />)
  
  const joinOurNetwork = screen.getByText('Join our network')
  expect(joinOurNetwork).toBeInTheDocument()
})

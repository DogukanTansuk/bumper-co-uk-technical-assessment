import {FC} from 'react'
import {PartnerRegFormRequestModel} from '../models'

interface DealerDealerShipComponentProps {
  partner: PartnerRegFormRequestModel
}

export const DealerShipComponent: FC<DealerDealerShipComponentProps> = ({partner}) => {
  const {name, company, mobile_phone, email_address, postcode} = partner

  return (
    <div className='card mt-5 divide-y-2'>
      <div className='card-header'>{name}</div>

      <div className='card-body divide-y-2'>
        <div className='card-item'>
          <span data-testid='company-display' className='item-display'>
            Company
          </span>
          <span data-testid='company-value' className='item-value'>
            {company}
          </span>
        </div>

        <div className='card-item'>
          <span data-testid='mobile-phone-number-display' className='item-display'>
            Mobile phone number
          </span>
          <span data-testid='mobile-phone-number-value' className='item-value'>
            {mobile_phone}
          </span>
        </div>

        <div className='card-item'>
          <span data-testid='email-address-display' className='item-display'>
            Email address
          </span>
          <span data-testid='email-address-value' className='item-value'>
            {email_address}
          </span>
        </div>

        <div className='card-item'>
          <span data-testid='postcode-display' className='item-display'>
            Postcode
          </span>
          <span data-testid='postcode-value' className='item-value'>
            {postcode}
          </span>
        </div>

        <div></div>
      </div>
    </div>
  )
}

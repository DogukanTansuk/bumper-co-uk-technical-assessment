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
          <span className='item-display'>Company</span>
          <span className='item-value'>{company}</span>
        </div>

        <div className='card-item'>
          <span className='item-display'>Mobile phone number</span>
          <span className='item-value'>{mobile_phone}</span>
        </div>

        <div className='card-item'>
          <span className='item-display'>Email address</span>
          <span className='item-value'>{email_address}</span>
        </div>

        <div className='card-item'>
          <span className='item-display'>Postcode</span>
          <span className='item-value'>{postcode}</span>
        </div>

        <div></div>
      </div>
    </div>
  )
}

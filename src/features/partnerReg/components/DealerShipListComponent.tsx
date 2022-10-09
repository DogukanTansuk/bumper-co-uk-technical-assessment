// React Imports
import React, {FC} from 'react'
import {useAppSelector} from '../../../hooks'

// Feature Imports
import {getPartners} from '../partnerRegSelector'

import {DealerShipComponent} from './DealerShipComponent'

export interface DealerShipListComponentProps {
  searchQuery: string
}

export const DealerShipListComponent: FC<DealerShipListComponentProps> = ({searchQuery}) => {
  const partners = useAppSelector(getPartners())
  return (
    <>
      {partners
        .filter((partner) => {
          if (
            searchQuery.length! > 0 &&
            partner.company.toLowerCase().includes(searchQuery.toLowerCase()!)
          )
            return partner
          else if (searchQuery.length === 0) return partner
        })
        .map((partner) => (
          <DealerShipComponent partner={partner} />
        ))}
    </>
  )
}

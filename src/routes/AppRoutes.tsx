// React Imports
import React, {FC, lazy} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

// Feature Imports
import {PartnerRegContent, PartnerRegForm} from '../features/partnerReg'

export const AppRoutes: FC = () => {
  // const PartnerRegContent = lazy(
  //   () => import('../features/partnerReg/components/RegisterationForm')
  // )

  return (
    <Routes>
      <Route path='/partner' element={<PartnerRegContent />} />
      <Route path='/registration/dealership' element={<PartnerRegForm />} />
      <Route path='*' element={<Navigate to='/partner' />} />
    </Routes>
  )
}

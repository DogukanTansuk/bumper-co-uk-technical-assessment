// React Imports
import {FC, lazy} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import App from '../App'

export const AppRoutes: FC = () => {
  const PartnerRegContent = lazy(
    () => import('../features/partnerReg/components/PartnerRegContent')
  )
  const PartnerRegForm = lazy(() => import('../features/partnerReg/components/PartnerRegForm'))
  const PartnerLoggedIn = lazy(
    () => import('../features/partnerReg/components/PartnerLoggedInComponent')
  )

  return (
    <Routes>
      <Route element={<App />}>
        <Route path='/partner' element={<PartnerRegContent />} />
        <Route path='/registration/dealership' element={<PartnerRegForm />} />
        <Route path='/partner/home' element={<PartnerLoggedIn />} />
        <Route path='*' element={<Navigate to='/partner' />} />
      </Route>
    </Routes>
  )
}

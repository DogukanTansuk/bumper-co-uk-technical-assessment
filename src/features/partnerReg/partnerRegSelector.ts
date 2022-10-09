import {RootState} from './../../libs/store'

export const getPartners =
  () =>
  ({partnerReg: {partners}}: RootState) =>
    partners

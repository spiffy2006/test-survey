import { page, text, phone, address, dynamicPanel } from './blocks'

export const Info = [
  text.create('Business Name'), // required
  address.create('Business Address'), // required,
  phone.create('Business Phone'), // required
  text.create('Doing Business As'),
  text.create('How long in business?'), // required
  text.create('Federal Tax ID'), // required
  dynamicPanel.create('Names and addresses of owners', [text.create('Name'), address.create('Address')])
]

const BusinessInfo = page.create('Business Info', Info)

export default BusinessInfo

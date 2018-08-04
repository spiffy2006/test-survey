import { address, phone, ssn, text, date, radioGroup } from './blocks'
export const Info = [
  text.create('First Name'), // required
  text.create('Middle Name'),
  text.create('Last Name'), // required
  phone.create('Primary Phone'), // required
  phone.create('Secondary Phone'),
  address.create('Address'),
  ssn.create(), // required
  text.create('Drivers License Number'), // required
  date.create('Date of Birth'), // required
  text.create('Place of Birth'), // required
  radioGroup.create('Are you a US Citizen?', ['Yes', 'No']) // required
]

const PersonalInfo = {
  name: 'personal-info',
  title: 'Personal Info',
  elements: Info
}

export default PersonalInfo

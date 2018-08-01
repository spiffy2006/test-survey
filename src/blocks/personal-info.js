import { address, phone, ssn, text, date, radioGroup } from './blocks'
export const Info = [
  text('First Name', true),
  text('Middle Name'),
  text('Last Name', true),
  phone('Primary Phone', true),
  phone('Secondary Phone'),
  address('address', 'Address'),
  ssn('SSN', true),
  text('Drivers License Number', true),
  date('Date of Birth', true),
  text('Place of Birth', true),
  radioGroup('Are you a US Citizen?', ['Yes', 'No'], true)
]

const PersonalInfo = {
  name: 'personal-info',
  title: 'Personal Info',
  elements: Info
}

export default PersonalInfo

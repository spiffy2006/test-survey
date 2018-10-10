export const zip = {
  type: 'regex',
  text: 'Zip',
  regex: '[0-9]{5}(?:[- ][0-9]{4})?'
}

export const ssn = {
  type: 'regex',
  text: 'SSN',
  regex: '[0-9]{3}-[0-9]{2}-[0-9]{4}'
}
export const email = {
  type: 'regex',
  text: 'E-mail',
  regex: '/.+@.+\..+/i'
}

import { states } from './constants'

// TODO visibleIf: '{question29} = \'item1\''

export function titleToName (title) {
  return title.replace(/[^\d\w\s-_]/g, '').toLowerCase().split(' ').join('-')
}

export function phone (title, isRequired = false) {
  return {
    type: 'text',
    name: titleToName(title),
    title: 'Primary Phone',
    inputType: 'tel',
    inputFormat: '(999) 999-9999',
    isRequired
  }
}

export function state () {
  return {
    type: 'dropdown',
    name: 'state',
    title: 'State',
    choices: getStatesArray()
  }
}

export function zip () {
  return {
    type: 'text',
    name: 'zip',
    title: 'Zip',
    validators: [
      {
        type: 'regex',
        text: 'Zip',
        regex: '[0-9]{5}(?:[- ][0-9]{4})?'
      }
    ]
  }
}

export function getStatesArray () {
  return Object.keys(states).map((abbr) => {
    return {value: states[abbr], text: abbr}
  })
}

export function address (name, title) {
  return {
    type: 'panel',
    name,
    title,
    elements: [
      text('Address Line 1', true),
      text('Address Line 2', true),
      text('City', true),
      state(),
      zip()
    ]
  }
}

export function ssn (title, isRequired = false) {
  return {
    type: 'text',
    name: titleToName(title),
    title,
    isRequired,
    validators: [
      {
        type: 'regex',
        text: 'SSN',
        regex: '[0-9]{3}-[0-9]{2}-[0-9]{4}'
      }
    ]
  }
}

export function text (title, isRequired = false) {
  return {
    type: 'text',
    name: titleToName(title),
    title,
    isRequired
  }
}

export function number (title, isRequired) {
  return {
    type: 'text',
    name: titleToName(title),
    title,
    inputType: 'number',
    isRequired
  }
}

export function date (title, isRequired = false) {
  return {
    type: 'text',
    name: titleToName(title),
    title,
    inputType: 'date',
    isRequired
  }
}

export function radioGroup (title, options, isRequired = false) {
  return {
    type: 'radiogroup',
    name: titleToName(title),
    title: title,
    choices: getOptions(options),
    isRequired
  }
}

export function file (title, isRequired = false) {
  return {
    type: 'file',
    name: titleToName(title),
    title,
    isRequired,
    showPreview: true,
    maxSize: 0
  }
}

export function sameLine (block) {
  block.startWithNewLine = false
  return block
}

export function visibleIf (title, value, block) {
  block.visibleIf = `{${titleToName(title)}} = '${value}'`
  return block
}

export function dropdown (title, options, isRequired) {
  return {
    type: 'dropdown',
    name: titleToName(title),
    title,
    choices: getOptions(options),
    isRequired
  }
}

export function getOptions (options) {
  return options.map(opt => { return {value: titleToName(opt), text: opt} })
}

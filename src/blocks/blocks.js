import { states } from './constants'
import { zip as zipcode, ssn as ss } from './validators'

class Block {
  constructor () {
    this.block = {}
  }

  clear () {
    this.block = {}
  }

  getBlock () {
    return this.block
  }

  create (title) {
    let block = this.getBlock()
    this.clear()
    block.title = title
    block.name = this.titleToName(title)
    return block
  }

  required () {
    this.block.isRequired = true
    return this
  }

  visibleWhen (title, value) {
    this.block.visibleIf = `{${this.titleToName(title)}} = '${value}'`
    return this
  }

  sameLine () {
    this.block.startWithNewLine = false
    return this
  }

  setTitle (title) {
    this.block.title = title
  }

  setName (name) {
    this.block.name = name
  }

  titleToName (title) {
    return title.replace(/[^\d\w\s-_]/g, '').toLowerCase().split(' ').join('-')
  }

  getOptions (options) {
    return options.map(opt => { return {value: this.titleToName(opt), text: opt} })
  }
}

export let block = new Block()

class Panel extends Block {
  create (title, elements) {
    this.block.type = 'panel'
    this.block.elements = elements
    return super.create(title)
  }
}
export let panel = new Panel()

class DynamicPanel extends Block {
  create (title, elements) {
    this.block.type = 'paneldynamic'
    this.block.templateElements = elements
    return super.create(title)
  }
}
export let dynamicPanel = new DynamicPanel()

class Text extends Block {
  create (title) {
    this.block.type = 'text'
    return super.create(title)
  }
}
export let text = new Text()

class NumberField extends Block {
  create (title) {
    this.block.type = 'text'
    this.block.inputType = 'number'
    return super.create(title)
  }
}
export let number = new NumberField()

class Phone extends Block {
  create (title) {
    this.block.type = 'text'
    this.block.inputType = 'tel'
    this.block.inputFormat = '(999) 999-9999'
    return super.create(title)
  }
}
export let phone = new Phone()

function getAddressBlocks () {
  return [
    text.create('Address Line 1'), // required
    text.create('Address Line 2'),
    text.create('City'), // required
    state.create(), // required
    zip.create() // required
  ]
}
class Address extends Block {
  create (title) {
    return panel.create(title, getAddressBlocks())
  }
}
export let address = new Address()

class AddressHistory extends Block {
  create (title) {
    return dynamicPanel.create(title, [...getAddressBlocks(), date.create('From'), date.create('To')])
  }
}
export let addressHistory = new AddressHistory()

class States extends Block {
  create (title = 'States') {
    this.block.type = 'dropdown'
    this.block.choices = this.getStatesArray()
    return super.create(title)
  }

  getStatesArray () {
    return Object.keys(states).map((abbr) => {
      return {value: states[abbr], text: abbr}
    })
  }
}

export let state = new States()

class ZipCode extends Block {
  create (title = 'Zip') {
    this.block.type = 'text'
    this.block.validators = [zipcode]
    return super.create(title)
  }
}
export let zip = new ZipCode()

class SSN extends Block {
  create (title = 'SSN') {
    this.block.type = 'text'
    this.block.inputFormat = '999-99-9999'
    this.block.validators = [ss]
    return super.create(title)
  }
}
export let ssn = new SSN()

class DateField extends Block {
  create (title) {
    this.block.type = 'text'
    this.block.inputType = 'date'
    return super.create(title)
  }
}
export let date = new DateField()

class RadioGroup extends Block {
  create (title, options) {
    this.block.type = 'radiogroup'
    this.block.choices = this.getOptions(options)
    return super.create(title)
  }
}
export let radioGroup = new RadioGroup()

class DropDown extends Block {
  create (title, options) {
    this.block.type = 'dropdown'
    this.block.choices = this.getOptions(options)
    return super.create(title)
  }
}
export let dropdown = new DropDown()

class FileUpload extends Block {
  create (title) {
    this.block.type = 'file'
    this.block.showPreview = true
    this.block.maxSize = 0
    return super.create(title)
  }

  showPreview (bool) {
    this.block.showPreview = bool
  }

  maxSize (size) {
    this.block.maxSize = size
  }
}

export let file = new FileUpload()

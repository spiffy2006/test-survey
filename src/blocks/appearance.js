import { page, file, number, dropdown } from './blocks'
import { hairColors, eyeColors } from './constants'

export const Info = [
  file.create('Current Picture'), // required
  dropdown.create('Hair Color', hairColors), // required
  dropdown.create('Eye Color', eyeColors), // required
  number.create('Height'), // required
  dropdown.sameLine().create('Height Unit', ['inches', 'cm']), // same line
  number.create('Weight'), // required
  dropdown.sameLine().create('Weight Unit', ['lbs', 'kg']) // same line
]

const Appearance = page.create('Appearance', Info)

export default Appearance

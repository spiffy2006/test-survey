import { file, number, dropdown, sameLine } from './blocks'
import { hairColors, eyeColors } from './constants'

export const Info = [
  file('Current Picture', true),
  dropdown('Hair Color', hairColors, true),
  dropdown('Eye Color', eyeColors, true),
  number('Height', true),
  sameLine(dropdown('Height Unit', ['inches', 'cm'])),
  number('Weight', true),
  sameLine(dropdown('Weight Unit', ['lbs', 'kg']))
]

const Appearance = {
  name: 'appearance',
  title: 'Appearance',
  elements: Info
}

export default Appearance

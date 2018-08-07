import { page, addressHistory } from './blocks'

export const Info = [addressHistory.create('Address History')]

const AddressHistory = page.create('Address History', Info)

export default AddressHistory

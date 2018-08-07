import { page, businessHistory } from './blocks'

export const Info = [businessHistory.create('Business History')]

const BusinessHistory = page.create('Business History', Info)

export default BusinessHistory

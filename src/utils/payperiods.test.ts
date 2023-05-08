import days from 'dayjs'
import {currentPayPeriod, isInPayPeriod} from './payperiods'

test('isInPayPeriod', () => {
    const payPeriod = {
        startDate: days('2020-01-01'),
        endDate: days('2020-01-15')
    }
    expect(isInPayPeriod(days('2020-01-01'), payPeriod)).toBe(true)
    expect(isInPayPeriod(days('2020-01-10'), payPeriod)).toBe(true)
    expect(isInPayPeriod(days('2020-01-15'), payPeriod)).toBe(false)
    expect(isInPayPeriod(days('2020-01-16'), payPeriod)).toBe(false)
    expect(isInPayPeriod(days('2020-01-31'), payPeriod)).toBe(false)
})
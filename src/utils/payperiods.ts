import days from 'dayjs'
import isInBetween from 'dayjs/plugin/isBetween'
import {PayPeriod} from "../types";
import localizedFormat from 'dayjs/plugin/localizedFormat';

days.extend(localizedFormat);
days.extend(isInBetween);

/**
 * Check if a date is in a pay period
 * @param date
 * @param payPeriod
 */
export const isInPayPeriod = (date: days.Dayjs, payPeriod: PayPeriod) => {
    const {startDate, endDate} = payPeriod
    return date.isBetween(startDate, endDate.subtract(1, 'day'), null, '[]')
}

/**
 * Get all pay periods from 2023-05-05 to 2025-12-31
 */
export const payPeriods = (): PayPeriod[] => {
    const payPeriods: PayPeriod[] = []
    let startDate = days('2023-05-05')
    while (startDate.isBefore(days('2025-12-31'))) {
        const endDate = startDate.add(14, 'day')
        payPeriods.push({startDate, endDate})
        startDate = endDate
    }
    return payPeriods
}

/**
 * Get the current pay period
 */
export const currentPayPeriod = (): PayPeriod => {
    const pp = payPeriods()
    const today = days()

    return pp.find((p) => isInPayPeriod(today, p))!
}
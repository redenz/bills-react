export interface PayPeriod {
    startDate: days.Dayjs
    endDate: days.Dayjs
}

export interface Bill {
    name: string
    amount: number
    dueDate: string
    isPaid: boolean
}
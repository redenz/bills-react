import React from 'react';
import './App.css';
import {currentPayPeriod, isInPayPeriod} from "./utils/payperiods";
import dayjs from 'dayjs';
import {Bill} from "./types";
import BillCards from "./components/bills/BillCards";


function App() {
    return (
        <div className="App dark">
            <header className="App-header">
                <div style={{width: '50%'}}>
                    Upcoming bills
                    <BillCards bills={upcomingBills()}/>

                    <h2>Late bills</h2>
                    <BillCards bills={lateBills()}/>

                    <h2>Paid bills</h2>
                    <BillCards bills={paidBills()}/>
                </div>
            </header>
        </div>
    );
}

const payPeriodBills = () => {
    return bills.filter(bill => isInPayPeriod(dayjs(bill.dueDate), currentPayPeriod()));
}

const upcomingBills = () => {
    return payPeriodBills().filter(bill => !isPaid(bill) && !isLate(bill)) || [];
}

const lateBills = () => {
    return payPeriodBills().filter(bill => isLate(bill) && !isPaid(bill))
}

const paidBills = () => {
    return payPeriodBills().filter(bill => isPaid(bill))
}

const isLate = (bill: Bill) => dayjs(bill.dueDate) < dayjs()
const isPaid = (bill: Bill) => bill.isPaid


// Create a list of 10 bills with the following properties: name, amount, due date. There should be 3 bills that have a due date in the current pay period
const bills = [
    {
        name: 'Rent',
        amount: 100000,
        dueDate: '2023-05-08',
        isPaid: false
    },
    {
        name: 'Electric',
        amount: 10000,
        dueDate: '2023-05-06',
        isPaid: false,
    },
    {
        name: 'Water',
        amount: 5000,
        dueDate: '2023-05-05',
        isPaid: true

    }
]
export default App;

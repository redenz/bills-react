import dayjs from "dayjs";
import {Bill} from "../../types";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/20/solid";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function BillCard(props: { bill: Bill }): JSX.Element {
    const {bill} = props;
    return (
        <>
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                {/*<img*/}
                {/*    src="https://tailwindui.com/img/logos/workcation.svg"*/}
                {/*    alt={bill.name}*/}
                {/*    className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"*/}
                {/*/>*/}
                <div className="text-sm font-medium leading-6 text-gray-900">{bill.name}</div>

            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Last invoice</dt>
                    <dd className="text-gray-700">
                        {dayjs(bill.dueDate).format('L')}
                    </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Amount</dt>
                    <dd className="flex items-start gap-x-2">
                        <div className="font-medium text-gray-900">{bill.amount / 100}</div>
                        <div
                            className={classNames(
                                'Overdue',
                                'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                            )}
                        >
                            Unpaid
                        </div>
                    </dd>
                </div>
            </dl>
        </>
    )
}
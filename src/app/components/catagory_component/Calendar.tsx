import { useMemo, useState, ChangeEvent, useContext } from 'react'
import calendarstyle from '../../styles/calendarstyle.module.css'
import calendar2style from '../../styles/Calendar2.module.css'
import { CalendarContext } from './CalendarContext'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default function Calendar() {
    const [dateRange, setDateRange] = useState([null, null])
    const [startDate, endDate] = dateRange
    return (
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update)
            }}
            isClearable={true}
        />
    )
}

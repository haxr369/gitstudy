import { useState } from 'react'
import RoomCataCSS from '../../styles/RoomCata.module.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale'

export default function Date_choice() {
    const [dateRange, setDateRange] = useState([new Date(), null])
    const [startDate, endDate] = dateRange
    return (
        <>
            <div className={RoomCataCSS.date_choice_box}>
                <h3>날짜</h3>
                <label htmlFor="Date" className={RoomCataCSS.btn_date}>
                    <div className={RoomCataCSS.btn_date2}>
                        <DatePicker
                            id="Date"
                            className={RoomCataCSS.DatePicker}
                            selectsRange={true}
                            startDate={startDate}
                            locale={ko}
                            dateFormat="MM.dd"
                            endDate={endDate}
                            minDate={new Date()}
                            onChange={(update) => {
                                setDateRange(update)
                            }}
                        />
                    </div>
                </label>
            </div>
        </>
    )
}

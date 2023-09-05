import { createContext, useContext } from 'react'
import RoomCataCSS from '../../styles/RoomCata.module.css'
import { CalendarContext } from './CalendarContext'

export default function Date_choice() {
    const { state, dispatch } = useContext(CalendarContext)

    const toggle_Calendar = () => {
        dispatch({ type: 'TOGGLE_CALENDAR' })
    }

    return (
        <section className={RoomCataCSS.date_choice_box}>
            <h3>날짜</h3>

            <label
                htmlFor="term"
                className={RoomCataCSS.btn_date}
                onClick={toggle_Calendar}>
                <span>
                    <b>9.3~9.4</b>
                    <em> · 1박</em>
                </span>
                {/* 회색박스 클릭시 달력이 뜨도록 구현 필요(현재 회색박스 내 텍스트 클릭시 달력이뜸)
                        20230905 by epik (수정 완료시 주석 삭제) */}
            </label>
        </section>
    )
}

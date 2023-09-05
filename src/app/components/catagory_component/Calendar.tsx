import { useMemo, useState, ChangeEvent, useContext } from 'react'
import calendarstyle from '../../styles/calendarstyle.module.css'
import { CalendarContext } from './CalendarContext'

export default function Calendar() {
    const { state } = useContext(CalendarContext)

    // 캘린더
    const [calendar, setCalendar] = useState<string>('')
    // 년 | 달 변경
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)

    // 윤달 체크하기
    const checkLeapYear = (year: number) => {
        if (year % 400 === 0) return true
        else if (year % 100 === 0) return false
        else if (year % 4 === 0) return true
        else return false
    }

    // 각 달의 01일 위치 정해주기
    const getFirstDayOfWeek = (year: number, month: number) => {
        let zero = ''

        if (month < 10) zero = '0'

        return new Date(year + '-' + zero + month + '-' + '01').getDay()
    }

    // 월 변경하기
    const changeYearMonth = (year: number, month: number) => {
        let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        // 윤달이면 29일 내보내기
        if (month === 2) if (checkLeapYear(year)) monthDay[1] = 29

        // 01일 위치
        let firstDay = getFirstDayOfWeek(year, month)

        // 이전 달 날짜
        let lastDay = monthDay[month - 1]

        let arrCalendar = []

        // 01일이 생성되기 전 비어있는 내용
        for (let i = 0; i < firstDay; i++) {
            arrCalendar.push('')
        }

        // 날짜 넣어주기
        for (let i = 1; i <= monthDay[month - 1]; i++) {
            arrCalendar.push(String(i))
        }

        // 마지막 날짜까지 넣고 비어있는 내용
        let remainDay = 7 - (arrCalendar.length % 7)

        if (remainDay < 7) {
            for (let i = 0; i < remainDay; i++) {
                arrCalendar.push('')
            }
        }

        renderCalendar(arrCalendar)
    }

    // 캘린더 만들기
    const renderCalendar = (calendar: string[]) => {
        let contents = []

        for (let i = 0; i < calendar.length; i++) {
            if (i === 0) contents.push('<tr>')
            else if (i % 7 === 0) {
                contents.push('</tr>')
                contents.push('<tr>')
            }
            // contents.push("<td>" + "<span>" + calendar[i] + "</span>" + `${calendar[i] !== "" ? '<Image src={Bob} alt="제목" />' : ""}` + "</td>");
            contents.push(
                `<td>
                    <div class="table_hover">
                        <span class="">${calendar[i]}</span>
                        
                        ${
                            calendar[i] !== ''
                                ? '<a href="/view/art/art"><Image src="/_next/static/media/1.672483f5.jpg" alt="제목" /></a>'
                                : ''
                        }
                        
                    </div>
                </td>`,
            )
        }

        contents.push('</tr>')

        setCalendar(contents.join(''))
    }

    // 화살표를 클릭했을 때 ( 왼쪽 | 오른쪽 )
    const changeMonth = (diff: number) => {
        setCurrentMonth((prev) => prev + diff)
    }

    // 이전 달 | 다음 달
    const calendarMemo = useMemo(() => {
        // 1월 아래로 떨어질 때, 12월 위로 올라갈 때
        if (currentMonth < 1) {
            setCurrentYear((prev) => prev - 1)
            setCurrentMonth(12)
        } else if (currentMonth > 12) {
            setCurrentYear((prev) => prev + 1)
            setCurrentMonth(1)
        }
        changeYearMonth(currentYear, currentMonth)
    }, [currentYear, currentMonth])

    return (
        <>
            {state.isCalendarVisible ? (
                <div className={calendarstyle.calendar_wrap}>
                    <div className="calendar__">
                        <div className="calendar_button_wrawp">
                            <button
                                onClick={() => changeMonth(-1)}
                                className="calendar_button_left"></button>
                            <input
                                type="number"
                                value={currentYear}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setCurrentYear(parseInt(e.target.value))
                                }
                            />
                            <select
                                value={currentMonth}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                    setCurrentMonth(parseInt(e.target.value))
                                }>
                                <option value="1">1월</option>
                                <option value="2">2월</option>
                                <option value="3">3월</option>
                                <option value="4">4월</option>
                                <option value="5">5월</option>
                                <option value="6">6월</option>
                                <option value="7">7월</option>
                                <option value="8">8월</option>
                                <option value="9">9월</option>
                                <option value="10">10월</option>
                                <option value="11">11월</option>
                                <option value="12">12월</option>
                            </select>
                            <button onClick={() => changeMonth(1)}></button>
                        </div>
                        <div
                            style={{
                                border: '1px solid',
                                borderRadius: '8px',
                                overflow: 'hidden',
                            }}>
                            <table className="table_border calendar_table table_bordered">
                                <thead>
                                    <tr>
                                        <th>일</th>
                                        <th>월</th>
                                        <th>화</th>
                                        <th>수</th>
                                        <th>목</th>
                                        <th>금</th>
                                        <th>토</th>
                                    </tr>
                                </thead>
                                {calendar.length > 0 && (
                                    <tbody
                                        dangerouslySetInnerHTML={{
                                            __html: calendar,
                                        }}></tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

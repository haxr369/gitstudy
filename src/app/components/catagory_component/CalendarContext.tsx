import { useContext, useReducer, createContext } from 'react'

// Context 생성
export const CalendarContext = createContext<any>(null)

// 초기 상태 및 리듀서 함수 정의
const initialState = {
    isCalendarVisible: false,
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'TOGGLE_CALENDAR':
            return { ...state, isCalendarVisible: !state.isCalendarVisible }
        default:
            return state
    }
}

export const CalendarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CalendarContext.Provider value={{ state, dispatch }}>
            {children}
        </CalendarContext.Provider>
    )
}

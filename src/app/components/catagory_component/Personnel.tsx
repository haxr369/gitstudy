import { useState } from 'react'
import RoomCataCSS from '../../styles/RoomCata.module.css'

export default function Personnel() {
    const [count, setCount] = useState(1)

    return (
        <section className={RoomCataCSS.personnel_box}>
            <strong>인원</strong>
            <div>
                <button
                    onClick={() => {
                        count > 1 ? setCount(count - 1) : null
                        // if (Count > 1) {
                        //     Count = Count - 1
                        //     setCount(Count)
                        // }
                    }}></button>
                <span>{count}</span>
                <button
                    onClick={() => {
                        setCount(count + 1)
                    }}></button>
            </div>
        </section>
    )
}

import RoomSidebar from '@/app/layout/roomSidebar/page'
import RoomList from '@/app/room/RoomList'

import style from '@/app/room/room.module.scss'

export default function Room() {
    return (
        <>
            <div className={`inner ${style.room}`}>
                <div className={style.roomSide}>
                    <RoomSidebar></RoomSidebar>
                </div>
                <RoomList />
            </div>
        </>
    )
}

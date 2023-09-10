'use client'

import RoomList from './RoomList'
import RoomCata from './RoomCata'

export default function Room() {
    return (
        <main className="content">
            <div className={`inner`}>
                <RoomList />
                <RoomCata />
            </div>
        </main>
    )
}

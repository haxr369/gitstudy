'use client'

import RoomList from './RoomList'
import RoomCata from './RoomCata'

export default function Room() {
    return (
        <main className="content">
            <div className={`inner`}>
                <RoomList />
            </div>
            <div>
                <RoomCata />
            </div>
        </main>
    )
}

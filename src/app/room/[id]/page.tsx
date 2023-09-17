'use client'
import RoomSidebar from '@/app/room/components/roomSidebar'
import RoomList from '@/app/room/RoomList'

import style from '@/app/room/room.module.scss'
import { getAccommos } from '@/app/apis/getAccommos'
import { useEffect, useState } from 'react'

const Room = () => {
    const [tags, setTags] = useState([])
    const [accommos, setAccommos] = useState([])

    useEffect(() => {
        const aco = async () => {
            await getAccommos({ tags: tags }).then((data) => {
                console.log(data)
                setAccommos(data)
            })
        }
        aco()
    }, [tags])

    // const accommos = getAccommos(tags)
    return (
        <>
            <div className={`inner ${style.room}`}>
                <div className={style.roomSide}>
                    <RoomSidebar tags={tags} onSetTags={setTags}></RoomSidebar>
                </div>
                <RoomList accommos={accommos} />
            </div>
        </>
    )
}

export default Room

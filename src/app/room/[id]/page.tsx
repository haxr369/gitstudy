'use client'
import RoomSidebar from '@/app/room/components/roomSidebar'
import RoomList from '@/app/room/RoomList'

import style from '@/app/room/room.module.scss'
import { getAccommos } from '@/app/apis/getAccommos'
import { useEffect, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

const Room = () => {
    const [tags, setTags] = useState([])
    const [accommos, setAccommos] = useState([])
    const urlParams = useParams()
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const params = new URLSearchParams()
        console.log('--parmas')
        console.log(params)
        tags.map((tag) => {
            params.append('tag', tag)
        })
        router.push(`/room/${urlParams.id}?${params.toString()}`)
    }, [tags])

    useEffect(() => {
        const aco = async () => {
            await getAccommos({ tags: tags }).then((data) => {
                console.log(data)
                setAccommos(data)
            })
        }
        aco()
    }, [searchParams])

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

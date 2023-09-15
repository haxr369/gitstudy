import React from 'react'

import { getItem } from '@/app/apis/getItem'
import RoomDetail from '@/app/room/components/RoomDetail'
import { getRoomCollection } from '@/app/apis/getItmesCollection'
import { RoomsInterface } from '@/app/apis/addItem'
import RoomCollection from '@/app/room/components/RoomCollection'

const RoomDetailPage = async ({ params }: { params: { id: string } }) => {
    const roomItem = await getItem(params)
    const roomCollection = await getRoomCollection(params)

    return (
        <>
            <RoomDetail {...roomItem} />
            <RoomCollection {...roomCollection} />
        </>
    )
}

export default RoomDetailPage

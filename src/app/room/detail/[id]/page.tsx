import React from 'react'

// import { getItem } from '@/app/apis/getItem'
import RoomDetail from '@/app/room/components/RoomDetail'
// import { getRoomCollection } from '@/app/apis/getItmesCollection's
import RoomCollection from '@/app/room/components/RoomCollection'
import getRoomsAPI from '@/app/apis/getRoomsAPI'
import { getItemAPI } from '@/app/apis/getItemAPI'

const RoomDetailPage = async ({ params }: { params: { id: string } }) => {
    // const roomItem = await getItem(params)
    const roomItem = await getItemAPI(params)
    // const roomCollection = await getRoomCollection(params)
    const roomCollection = await getRoomsAPI(params)

    return (
        <>
            <RoomDetail {...roomItem} />
            <RoomCollection {...roomCollection} />
        </>
    )
}

export default RoomDetailPage

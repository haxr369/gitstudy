import React from 'react'

import { getItem } from '@/app/apis/getItem'
import RoomDetail from '@/app/room/components/RoomDetail'

const RoomDetailPage = async ({ params }: { params: { id: string } }) => {
    const roomItem = await getItem(params)

    return <RoomDetail {...roomItem} />
}

export default RoomDetailPage

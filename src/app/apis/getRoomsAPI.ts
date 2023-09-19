import { RoomsInterface } from '@/app/apis/addItem'

const getRoomsAPI = async ({ id }): Promise<RoomsInterface> => {
    try {
        const response = await fetch(
            `https://firestore.googleapis.com/v1/projects/gogogosol/databases/(default)/documents/rooms/${id}`,
            // 'https://firestore.googleapis.com/v1/projects/gogogosol/databases/(default)/documents/rooms/2',
            // 위 URL에서 "your-project-id"와 "rooms"를 실제 프로젝트 ID 및 컬렉션 이름으로 대체해야 합니다.
            // { next: { revalidate: 30 } },
        )

        console.log('HELLO', response)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()

        if (data && data.fields) {
            // Firebase Firestore의 데이터 형식에 따라 필드를 추출하여 원하는 형태로 가공할 수 있습니다.
            console.log(`${id}` + '방 정보들')
            console.log(data.fields.rooms.arrayValue.values[0].mapValue)
            const rooms = data.fields.rooms.arrayValue.values.map((room) => ({
                roomId: room.mapValue.fields.roomId.stringValue,
                name: room.mapValue.fields.name.stringValue,
                img: room.mapValue.fields.img.stringValue,
                rentAllPrice: room.mapValue.fields.rentAllPrice.stringValue,
                soldOut: room.mapValue.fields.soldOut.booleanValue,
            }))
            // const rooms = [
            //     {
            //         roomId: 'room.roomId.stringValue,',
            //         name: 'room.name.stringValue,',
            //         img: 'room.img.stringValue,',
            //         rentAllPrice: 'r',
            //         soldOut: false,
            //     },
            // ]

            const res = { id: id, rooms: rooms }

            return res
        } else {
            throw new Error('Data not found')
        }
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export default getRoomsAPI

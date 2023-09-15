import { RoomsInterface } from '@/app/apis/addItem'
import SingleRoom from '@/app/room/components/SingleRoom'

const RoomCollection = ({ id, rooms }: RoomsInterface) => {
    return (
        <>
            <article className="block w-962px mx-auto">
                {rooms.map((room) => (
                    <SingleRoom key={id + room.name} {...room} />
                ))}
            </article>
        </>
    )
}

export default RoomCollection

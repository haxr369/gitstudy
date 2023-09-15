import { RoomInterface } from '@/app/apis/addItem'

function SingleRoom(room: RoomInterface) {
    return (
        <>
            <div className="mb-6 pr-6 py-6 pl-424px border-2 border-black/10 relative">
                <p className="inline-block absolute top-4 left-4 w-94 h-56 ">
                    <img className="inline" src={room.img} alt={room.name} />
                </p>
                <strong className="block h-37 text-xl font-bold h-9">
                    {room.name}
                </strong>
                <div className="m-0">
                    <div className="m-0 p-0">
                        <div className="flex pt-10">
                            <strong className="flex-1">가격</strong>
                            <p className="flex-1 text-right">
                                {room.rentAllPrice}
                            </p>
                        </div>
                        <button className="h-12 my-3 text-left w-full">
                            객실 이용 안내
                        </button>
                        <button className="block w-full h-10 text-lg text-center text-white bg-main-red">
                            예약
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleRoom

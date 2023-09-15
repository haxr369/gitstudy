'use client'
import { RoomsInterface, addItem, addRooms } from '@/app/apis/addItem'

function apitest() {
    const jsonData = {
        id: '1',
        name: '명동 밀리오레호텔',
        img: '../img/roomList1.jpg',
        score: '8.9',
        scoreTxt: '만족해요',
        infoAddr: '중구 충무로1가',
        infoOpt: '예약취소가능',
        infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
        rentHalf: 'rentHalf',
        rentAll: '숙박',
        rentAllPrice: '80,000',
        rentBedge: '예약특가',
        ceoSay: '04년생 생일지나야 합니다. 투숙 가능 생일이 지나지 않았을 경우 동성만 이용 가능하지시만, 부모님 동의서가 필요, 동의서는 호텔에 문의하면 보내드립니다. 또한 보여지는 객실 사진과 다른 구조의 객실로 배정 받을 수 있는 점 참고하여 예약해주시기 바랍니다.',
        soldOut: false,
    }

    const onClickItme = async () => {
        await addItem(jsonData)
    }

    // const jsonRoomsData: RoomsInterface = {
    //     id: '1',
    //     rooms: [
    //         {
    //             roomId: 'room1',
    //             name: '스위트 룸',
    //             img: 'https://example.com/room1.jpg',
    //             rentAllPrice: '$200',
    //             soldOut: false,
    //         },
    //         {
    //             roomId: 'room2',
    //             name: '스탠다드 룸',
    //             img: 'https://example.com/room2.jpg',
    //             rentAllPrice: '$150',
    //             soldOut: true,
    //         },
    //         {
    //             roomId: 'room3',
    //             name: '디럭스 룸',
    //             img: 'https://example.com/room3.jpg',
    //             rentAllPrice: '$250',
    //             soldOut: false,
    //         },
    //     ],
    // rooms: [
    //     {
    //         roomId: '1',
    //         name: '1번 방',
    //         img: '../img/roomList1.jpg',
    //         rentAllPrice: '80,000',
    //         soldOut: false,
    //     },
    //     {
    //         roomId: '2',
    //         name: '2번 방',
    //         img: '../img/roomList1.jpg',
    //         rentAllPrice: '70,000',
    //         soldOut: true,
    //     },
    //     {
    //         roomId: '3',
    //         name: '3번 방',
    //         img: '../img/roomList1.jpg',
    //         rentAllPrice: '70,000',
    //         soldOut: true,
    //     },
    // ],
    // }\

    const roomsData = {
        // 숙소 아이디
        id: '4',
        rooms: [
            {
                // 방 아이디
                roomId: '1',
                name: '디럭스 룸',
                img: '../img/roomList1.jpg',
                rentAllPrice: '20,000',
                soldOut: false,
            },
            {
                roomId: '2',
                name: '오션 마우틴 뷰 룸',
                img: 'https://example.com/room2.jpg',
                rentAllPrice: '$1500',
                soldOut: true,
            },
            {
                roomId: '3',
                name: '디럭스 룸',
                img: 'https://example.com/room3.jpg',
                rentAllPrice: '$250',
                soldOut: false,
            },
        ],
    }

    const onClickRooms = async () => {
        await addRooms(roomsData)
    }

    return (
        <>
            <div className="m-10">
                <h1> Firebase 사용하기</h1>
                <button onClick={onClickItme}>firebase에 입력하기 </button>
            </div>
            <div className="m-10">
                <h1> 숙소에 방 정보 입력하기</h1>
                <button onClick={onClickRooms}>
                    firebase에 방들 입력하기{' '}
                </button>
            </div>
        </>
    )
}
export default apitest

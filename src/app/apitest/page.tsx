'use client'

import { addAccommo } from '@/app/apis/addAccommo'
import { addEventData } from '@/app/apis/addEventData'
import { addItem, addRooms } from '@/app/apis/addItem'
import { getAccommos } from '@/app/apis/getAccommos'
import { getEventCompany } from '@/app/apis/getEventPage'
import getRoomsAPI from '@/app/apis/getRoomsAPI'
// import { redirect } from 'next/dist/server/api-utils'

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
    const RoomLists = [
        // path 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제)
        {
            id: '1',
            name: '명동 밀리오레호텔',
            img: '../img/roomList1.jpg',
            score: '8.9',
            scoreTxt: '만족해요',
            infoAddr: '중구 충무로1가',
            infoOpt: '예약취소가능',
            infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
            rentHalf: '대실',
            rentHalfPrice: '35,000',
            rentAll: '숙박',
            rentAllPrice: '80,000',
            rentBedge: '예약특가',
            tags: ['swimming pool', 'BBQ'],
        },
        {
            id: '2',
            name: '공덕 밀리오레호텔',
            img: '../img/roomList1.jpg',
            score: '8.9',
            scoreTxt: '만족해요',
            infoAddr: '마포구 충무로1가',
            infoOpt: '예약취소가능',
            infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
            rentHalf: '대실',
            rentHalfPrice: '35,000',
            rentAll: '숙박',
            rentAllPrice: '80,000',
            rentBedge: '예약특가',
            tags: ['foot volleyball court', 'BBQ'],
        },
        {
            id: '4',
            name: '용산 밀리오레호텔',
            img: '../img/roomList1.jpg',
            score: '4.2',
            scoreTxt: '만족해요',
            infoAddr: '용산구 충무로1가',
            infoOpt: '예약취소가능',
            infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
            rentHalf: '대실',
            rentHalfPrice: '35,000',
            rentAll: '숙박',
            rentAllPrice: '80,000',
            rentBedge: '예약특가',
            tags: ['foot volleyball court', 'seminar room'],
        },
        {
            id: '5',
            name: '구로 밀리오레호텔',
            img: '../img/roomList1.jpg',
            score: '9.9',
            scoreTxt: '만족해요',
            infoAddr: '중구 충무로1가',
            infoOpt: '예약취소가능',
            infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
            rentHalf: '대실',
            rentHalfPrice: '35,000',
            rentAll: '숙박',
            rentAllPrice: '80,000',
            rentBedge: '예약특가',
            tags: ['karaoke', 'seminar room'],
        },
        {
            id: '6',
            name: '잠실 밀리오레호텔',
            img: '../img/roomList1.jpg',
            score: '7.9',
            scoreTxt: '만족해요',
            infoAddr: '송파구 충무로1가',
            infoOpt: '예약취소가능',
            infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
            rentHalf: '대실',
            rentHalfPrice: '35,000',
            rentAll: '숙박',
            rentAllPrice: '80,000',
            rentBedge: '예약특가',
            tags: ['karaoke', 'spar'],
        },
    ]

    const onClickRooms = async () => {
        await addRooms(roomsData)
    }

    const onClickGetAPI = async () => {
        await getRoomsAPI({ id: '1' })
    }

    const onClickAddAccommo = async () => {
        RoomLists.map(async (room) => {
            await addAccommo(room)
        })
    }

    const onClickGetAccommo = async () => {
        await getAccommos({ tags: [] })
    }

    const onClickAddEventData = async () => {
        await addEventData()
    }

    const onClickGetEvent = async () => {
        const res = await getEventCompany()
        console.log(res)
    }

    const onClickGetInfo = async () => {
        const res = await fetch('http://localhost:3000/apitest/api')

        console.log('res1')
        console.log(res.text)
        // CORS 문제 발생
        // const res2 = await fetch('http://localhost:8080', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         JSESSIONID: '34DE6E46D7C17B7B6DDD8C96F73C0FDD',
        //     },
        // })
        // console.log('res2')
        // console.log(res2.text)
        // redirect(res)
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
            <div className="m-10">
                <h1> 숙소에 방 정보 입력하기</h1>
                <button onClick={onClickGetAPI}>
                    firebase에 방들 가져오기{' '}
                </button>
            </div>
            <div className="m-10">
                <h1> 숙소들 입력하기</h1>
                <button onClick={onClickAddAccommo}>
                    firebase에 숙소 저장하기
                </button>
            </div>
            <div className="m-10">
                <h1> 숙소들 입력하기</h1>
                <button onClick={onClickAddEventData}>
                    firebase에 이벤트 추가하기
                </button>
            </div>
            <div className="m-10">
                <h1> 숙소들 입력하기</h1>
                <button onClick={onClickGetAccommo}>
                    firebase에 숙소들 tag로 가져오기
                </button>
            </div>
            <div className="m-10">
                <h1> 숙소들 입력하기</h1>
                <button onClick={onClickGetEvent}>
                    firebase에 이벤트 값 가져오기
                </button>
            </div>

            <div>
                <a
                    href="http://localhost:8080/oauth2/authorization/google"
                    role="button">
                    Google Login
                </a>
                <br />
                <a
                    href="http://localhost:8080/oauth2/authorization/kakao"
                    role="button">
                    Kakao Login
                </a>
                <br />
                <a
                    href="http://localhost:8080/oauth2/authorization/facebook"
                    role="button">
                    Facebook Login
                </a>
                <button onClick={onClickGetInfo}>내 정보 가져오기</button>
            </div>
        </>
    )
}
export default apitest

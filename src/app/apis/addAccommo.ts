import { db } from '@/app/firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'

//    입력 데이터 형식
//    {
//         id: '1',
//         name: '명동 밀리오레호텔',
//         img: '../img/roomList1.jpg',
//         score: '8.9',
//         scoreTxt: '만족해요',
//         infoAddr: '중구 충무로1가',
//         infoOpt: '예약취소가능',
//         infoEvt: '무료주차,넷플릭스 고객 개인 계정 로그인 필수',
//         rentHalf: 'rentHalf',
//         rentAll: '숙박',
//         rentAllPrice: '80,000',
//         rentBedge: '예약특가',
//         ceoSay: '04년생 생일지나야 합니다. 투숙 가능 생일이 지나지 않았을 경우 동성만 이용 가능하지시만, 부모님 동의서가 필요, 동의서는 호텔에 문의하면 보내드립니다. 또한 보여지는 객실 사진과 다른 구조의 객실로 배정 받을 수 있는 점 참고하여 예약해주시기 바랍니다.',
//         soldOut: false,
//     }

export interface AccommoInterface {
    id: string
    name: string
    img: string
    score: string
    scoreTxt: string
    infoAddr: string
    infoOpt: string
    infoEvt: string
    rentHalf: string
    rentHalfPrice: string
    rentAll: string
    rentAllPrice: string
    rentBedge: string
    tags: string[]
}

export const addAccommo = async (item: AccommoInterface) => {
    await setDoc(doc(db, 'accommos', item.id), item)
}

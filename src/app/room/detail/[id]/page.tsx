import React from 'react'
import style from '@/app/room/room.module.scss'
import {
    collection,
    getDocs,
    addDoc,
    query,
    onSnapshot,
} from 'firebase/firestore'
import { db } from '@firebase/firebase'

const RoomDetailPage = async ({ params }: { params: { id: number } }) => {
    // const params = props.params.id
    // const exmDetail =
    //     // path 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제)
    //     {
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

    const dataArray = []
    const q = await getDocs(collection(db, 'items'))
    console.log('--data--')
    q.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().id}`)
        dataArray.push(doc.data())
    })
    console.log(dataArray[0])

    return (
        <div className="content">
            <div className="inner">
                <div className={style.roomDetail}>
                    <div className={style.boxImg}></div>
                    <div className={style.boxTxt}>
                        <strong className={style.tit}>
                            {dataArray[0].name}
                        </strong>
                        <span className={style.info}>
                            <span className={style.infoScore}>
                                <em>{dataArray[0].score}</em>&nbsp;
                                {dataArray[0].scoreTxt}
                            </span>
                            <span className={style.infoAddr}>
                                {dataArray[0].infoAddr}
                            </span>
                            <span className={style.infoOpt}>
                                {dataArray[0].infoOpt}
                            </span>
                            <span className={style.infoEvt}>
                                {dataArray[0].infoEvt}
                            </span>
                            <span className={style.infoCeo}>
                                <strong>사장님 한마디</strong>
                                <span className={style.clamp}>
                                    {dataArray[0].ceoSay}
                                </span>
                            </span>
                        </span>
                        {/* <span className={style.price}>
                            <span className={style.priceDetail}>
                                {exmDetail.rentHalf}&nbsp;
                                <span className={style.bold}>
                                    {exmDetail.rentHalfPrice}원
                                </span>
                            </span>
                            <span className={style.priceDetail}>
                                {exmDetail.rentAll}&nbsp;
                                <span className={style.badge}>
                                    {exmDetail.rentBedge}
                                </span>
                                &nbsp;
                                <span className={`${style.bold} ${style.pink}`}>
                                    {exmDetail.rentAllPrice}원
                                </span>
                            </span>
                        </span> */}
                        <span className={style.btn}>
                            {dataArray[0].soldOut ? (
                                <button>예약 마감</button>
                            ) : (
                                <button>숙박 예약</button>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetailPage

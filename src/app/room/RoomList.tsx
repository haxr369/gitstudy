import React from 'react'

import style from '../styles/roomList.module.scss'

const RoomList = () => {
    return (
        <div>
            <ul className={style.roomList}>
                <li className={style.roomListItem}>
                    <a href="/">
                        <span className={style.boxImg}>
                            {/* 이미지 스타일 수정 필요 - 20230902 by jyj */}
                            <img src="../img/roomList1.jpg" alt="" />
                        </span>
                        <span className={style.boxTxt}>
                            <span className={style.info}>
                                <strong className={style.infoTit}>
                                    명동 밀리오레호텔
                                </strong>
                                <span className={style.infoScore}>
                                    <span>
                                        <em>8.9</em>&nbsp;만족해요
                                    </span>
                                    &nbsp;(3611)
                                </span>
                                <span className={style.infoAddr}>
                                    중구 충무로1가
                                </span>
                                <span className={style.infoOpt}>
                                    예약취소가능
                                </span>
                                <span className={style.infoEvt}>
                                    무료주차,넷플릭스 고객 개인 계정 로그인 필수
                                </span>
                            </span>
                            <span className={style.price}>
                                <span className={style.priceDetail}>
                                    대실&nbsp;
                                    <span className={style.bold}>35,000원</span>
                                </span>
                                <span className={style.priceDetail}>
                                    숙박&nbsp;
                                    <span className={style.badge}>
                                        예약특가
                                    </span>
                                    &nbsp;
                                    <span
                                        className={`${style.bold} ${style.pink}`}>
                                        80,000원
                                    </span>
                                </span>
                            </span>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default RoomList

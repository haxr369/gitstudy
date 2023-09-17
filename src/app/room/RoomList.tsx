import React from 'react'

import style from '@/app/room/room.module.scss'
import Link from 'next/link'
import { AccommoInterface } from '@/app/apis/addAccommo'

const RoomList = ({ accommos }: { accommos: AccommoInterface[] }) => {
    return (
        <div>
            <ul className={style.roomList}>
                {accommos.map((room) => {
                    return (
                        <li key={room.id} className={style.roomListItem}>
                            <Link href={`/room/detail/${room.id}`}>
                                <span className={style.boxImg}>
                                    {/* 이미지 스타일 수정 필요 - 20230902 by jyj */}
                                    <img src={room.img} alt="" />
                                </span>
                                <span className={style.boxTxt}>
                                    <span className={style.info}>
                                        <strong className={style.infoTit}>
                                            {room.name}
                                        </strong>
                                        <span className={style.infoScore}>
                                            <span>
                                                <em>{room.score}</em>&nbsp;
                                                {room.scoreTxt}
                                            </span>
                                            &nbsp;(3611)
                                        </span>
                                        <span className={style.infoAddr}>
                                            {room.infoAddr}
                                        </span>
                                        <span className={style.infoOpt}>
                                            {room.infoOpt}
                                        </span>
                                        <span className={style.infoEvt}>
                                            {room.infoEvt}
                                        </span>
                                    </span>
                                    <span className={style.price}>
                                        <span className={style.priceDetail}>
                                            {room.rentHalf}&nbsp;
                                            <span className={style.bold}>
                                                {room.rentHalfPrice}원
                                            </span>
                                        </span>
                                        <span className={style.priceDetail}>
                                            {room.rentAll}&nbsp;
                                            <span className={style.badge}>
                                                {room.rentBedge}
                                            </span>
                                            &nbsp;
                                            <span
                                                className={`${style.bold} ${style.pink}`}>
                                                {room.rentAllPrice}원
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RoomList

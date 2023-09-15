import { ItemInterface } from '@/app/apis/addItem'
import style from '@/app/room/room.module.scss'

function RoomDetail(roomItem: ItemInterface) {
    return (
        <div className="content">
            <div className="inner">
                <div className={style.roomDetail}>
                    <div className={style.boxImg}></div>
                    <div className={style.boxTxt}>
                        <strong className={style.tit}>{roomItem.name}</strong>
                        <span className={style.info}>
                            <span className={style.infoScore}>
                                <em>{roomItem.score}</em>&nbsp;
                                {roomItem.scoreTxt}
                            </span>
                            <span className={style.infoAddr}>
                                {roomItem.infoAddr}
                            </span>
                            <span className={style.infoOpt}>
                                {roomItem.infoOpt}
                            </span>
                            <span className={style.infoEvt}>
                                {roomItem.infoEvt}
                            </span>
                            <span className={style.infoCeo}>
                                <strong>사장님 한마디</strong>
                                <span className={style.clamp}>
                                    {roomItem.ceoSay}
                                </span>
                            </span>
                        </span>

                        <span className={style.btn}>
                            {roomItem.soldOut ? (
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
export default RoomDetail

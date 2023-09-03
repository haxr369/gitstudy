import RoomCataCSS from '../styles/RoomCata.module.css'

export default function RoomCata() {
    return (
        <>
            <main className={RoomCataCSS.background}>
                <section className={RoomCataCSS.date_choice_box}>
                    <h3>날짜</h3>
                    <div className={RoomCataCSS.btn_date}>
                        <span>
                            <b>9.3~9.4</b>
                            <em> · 1박</em>
                        </span>
                    </div>
                </section>
                <h3 className={RoomCataCSS.detail_cata_word}>상세 조건</h3>
                <div className={RoomCataCSS.btn_wrap}>
                    <button>초기화</button>
                    <button>적용</button>
                </div>
                <section className={RoomCataCSS.detail_checkbox}>
                    <ul>
                        <li>
                            <input type="checkbox"></input>
                            <label>예약 가능</label>
                        </li>
                        <li>
                            <input type="checkbox"></input>
                            <label>프로모션</label>
                        </li>
                    </ul>
                </section>
                <section className={RoomCataCSS.personnel_box}>
                    <strong>인원</strong>
                    <div>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </section>
                <section className={RoomCataCSS.pride_box}>
                    <strong>가격</strong>
                    <span>1만원 이상</span>
                    <progress></progress>
                </section>
                <section className={RoomCataCSS.bed_type_box}>
                    <strong>베드 타입</strong>
                    <div>
                        <p>
                            <input type="checkbox"></input>
                            <label className={RoomCataCSS.label_room1}>
                                싱글
                            </label>
                        </p>
                        <p>
                            <input type="checkbox"></input>
                            <label className={RoomCataCSS.label_room1}>
                                더블
                            </label>
                        </p>
                        <p>
                            <input type="checkbox"></input>
                            <label className={RoomCataCSS.label_room1}>
                                트윈
                            </label>
                        </p>
                        <p>
                            <input type="checkbox"></input>
                            <label className={RoomCataCSS.label_room1}>
                                온돌
                            </label>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

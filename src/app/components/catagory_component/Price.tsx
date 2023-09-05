import RoomCataCSS from '../../styles/RoomCata.module.css'

export default function Price() {
    return (
        <section className={RoomCataCSS.pride_box}>
            <div>
                <strong>가격 &nbsp;&nbsp;</strong>
                <span> 1만원 이상</span>
            </div>
            <div className={RoomCataCSS.progress_div}>
                <progress></progress>
            </div>
        </section>
    )
}

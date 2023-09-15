import RoomCataCSS from '../../styles/RoomCata.module.css'
import Range from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function Price() {
    return (
        <section className={RoomCataCSS.pride_box}>
            <div>
                <strong>가격 &nbsp;&nbsp;</strong>
                <span> 1만원 이상</span>
            </div>
            <div>
                <Range />
            </div>
        </section>
    )
}

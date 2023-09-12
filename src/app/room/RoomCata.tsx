import RoomCataCSS from '../styles/RoomCata.module.css'
import Calendar from '../components/catagory_component/Calendar'
import Bed_type from '../components/catagory_component/Bed_type'
import Date_choice from '../components/catagory_component/Date_choice'
import Detail_btn from '../components/catagory_component/Detail_btn'
import Personnel from '../components/catagory_component/Personnel'
import Price from '../components/catagory_component/Price'
import Detail_no_title from '../components/catagory_component/Detail_no_title'
import Detail_title from '../components/catagory_component/Detail_title'
import Detail_two_line from '../components/catagory_component/Detail_two_line'

export default function RoomCata() {
    return (
        <>
            <main className={RoomCataCSS.background}>
                <Date_choice></Date_choice>
                <Detail_btn></Detail_btn>
                <Detail_no_title></Detail_no_title>
                <Personnel></Personnel>
                <Price></Price>
                <Bed_type></Bed_type>
                <Detail_title></Detail_title>
                <Detail_two_line></Detail_two_line>
            </main>
        </>
    )
}

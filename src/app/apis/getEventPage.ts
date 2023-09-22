import { db } from '@/app/firebase/firebase'
import { collection, getDocs, query } from 'firebase/firestore'

export const getEventPage = async () => {
    // 찾고자하는 id의 데이터만 가져온다.
    const dataArray = []
    const idQuery = query(collection(db, 'eventPage'))
    const q = await getDocs(idQuery)
    console.log('--data--')
    q.forEach((doc) => {
        dataArray.push(doc.data())
    })
    // console.log(dataArray[0])
    return dataArray[0]
}

export const getEventCompany = async () => {
    // 찾고자하는 id의 데이터만 가져온다.
    const dataArray = []
    const idQuery = query(collection(db, 'eventCompany'))
    const q = await getDocs(idQuery)
    console.log('--data--')
    q.forEach((doc) => {
        dataArray.push(doc.data())
    })
    // console.log(dataArray[0])
    return dataArray
}

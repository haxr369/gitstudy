import { ItemInterface } from '@/app/apis/addItem'
import { db } from '@firebase/firebase'
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
} from 'firebase/firestore'

export const getItem = async ({
    id,
}: {
    id: string
}): Promise<ItemInterface> => {
    console.log('id : ', id)
    // 찾고자하는 id의 데이터만 가져온다.
    // const idQuery = query(collection(db, 'items'), where('id', '==', id))
    const idQuery = doc(db, 'rooms', id)
    const dataArray = []
    const q = await getDoc(idQuery)
    // const q = await getDocs(collection(db, 'items'))
    console.log('--data--')
    if (q.exists()) {
        // console.log('Document data:', q.data())
        dataArray.push(q.data())
    } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!')
    }
    // console.log(dataArray[0])
    return dataArray[0]
}

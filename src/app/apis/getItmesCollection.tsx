import { RoomsInterface } from '@/app/apis/addItem'
import { db } from '@firebase/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'

//
export const getItemsCollection = async () => {
    const dataArray = []
    const q = await getDocs(collection(db, 'items'))
    console.log('--data--')
    q.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().id}`)
        dataArray.push(doc.data())
    })
    console.log(dataArray[0])

    return dataArray
}

export const getRoomCollection = async ({
    id,
}: {
    id: string
}): Promise<RoomsInterface> => {
    console.log('id : ', id)
    // 찾고자하는 id의 데이터만 가져온다.
    // const idQuery = query(collection(db, 'rooms'), where('id', '==', id))
    const docRef = doc(db, 'rooms', id)

    const dataArray = []
    const q = await getDoc(docRef)
    // const q = await getDocs(collection(db, 'items'))
    console.log('--API 요청--')
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

import { ItemInterface } from '@/app/apis/addItem'
import { db } from '@firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const getItem = async ({
    id,
}: {
    id: string
}): Promise<ItemInterface> => {
    console.log('id : ', id)
    // 찾고자하는 id의 데이터만 가져온다.
    const idQuery = query(collection(db, 'items'), where('id', '==', id))

    const dataArray = []
    const q = await getDocs(idQuery)
    // const q = await getDocs(collection(db, 'items'))
    console.log('--data--')
    q.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().id}`)
        dataArray.push(doc.data())
    })
    console.log(dataArray[0])
    return dataArray[0]
}

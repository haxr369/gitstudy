import { AccommoInterface } from '@/app/apis/addAccommo'
import { db } from '@/app/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const getAccommos = async ({
    tags,
}: {
    tags: string[]
}): Promise<AccommoInterface[]> => {
    console.log(tags)
    // 찾고자하는 id의 데이터만 가져온다.

    const dataArray = []
    if (tags.length == 0) {
        const q = await getDocs(collection(db, 'accommos'))
        q.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().id} ${doc.data().name} `)
            dataArray.push(doc.data())
        })
        return dataArray
    }
    const idQuery = query(
        collection(db, 'accommos'),
        where('tags', 'array-contains', tags[0]),
    )
    const q = await getDocs(idQuery)
    console.log('--data--')
    q.forEach((doc) => {
        const docTags = doc.data().tags
        if (tags.every((tag) => docTags.includes(tag))) {
            console.log(`${doc.id} => ${doc.data().id} ${doc.data().name} `)
            dataArray.push(doc.data())
        }
    })
    // console.log(dataArray[0])
    return dataArray
}

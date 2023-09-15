import { ItemInterface } from '@/app/apis/addItem'

export const getItemAPI = async ({ id }): Promise<ItemInterface> => {
    try {
        const response = await fetch(
            `https://firestore.googleapis.com/v1/projects/gogogosol/databases/(default)/documents/items/${id}`,
            { next: { revalidate: 3600 } },
            // 위 URL에서 "your-project-id"와 "rooms"를 실제 프로젝트 ID 및 컬렉션 이름으로 대체해야 합니다.
        )

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()

        if (data && data.fields) {
            // Firebase Firestore의 데이터 형식에 따라 필드를 추출하여 원하는 형태로 가공할 수 있습니다.
            const itemData = {
                id: data.fields.id.stringValue,
                name: data.fields.name.stringValue,
                img: data.fields.img.stringValue,
                score: data.fields.score.stringValue,
                scoreTxt: data.fields.scoreTxt.stringValue,
                infoAddr: data.fields.infoAddr.stringValue,
                infoOpt: data.fields.infoOpt.stringValue,
                infoEvt: data.fields.infoEvt.stringValue,
                rentHalf: data.fields.rentHalf.stringValue,
                rentAll: data.fields.rentAll.stringValue,
                rentAllPrice: data.fields.rentAllPrice.stringValue,
                rentBedge: data.fields.rentBedge.stringValue,
                ceoSay: data.fields.ceoSay.stringValue,
                soldOut: data.fields.soldOut.booleanValue,
            }

            return itemData
        } else {
            throw new Error('Data not found')
        }
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export const getItemsAPI = async () => {
    try {
        const response = await fetch(
            `https://firestore.googleapis.com/v1/projects/gogogosol/databases/(default)/documents/items`,
            { next: { revalidate: 3600 } },
            // 위 URL에서 "your-project-id"와 "rooms"를 실제 프로젝트 ID 및 컬렉션 이름으로 대체해야 합니다.
        )

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()

        if (data && data.fields) {
            // Firebase Firestore의 데이터 형식에 따라 필드를 추출하여 원하는 형태로 가공할 수 있습니다.
            console.log(data)

            return data.fields
        } else {
            throw new Error('Data not found')
        }
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

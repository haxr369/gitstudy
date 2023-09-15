export const getItemAPI = async ({ id }) => {
    try {
        const response = await fetch(
            `https://firestore.googleapis.com/v1/projects/gogogosol/databases/(default)/documents/items/${id}`,
            // 위 URL에서 "your-project-id"와 "rooms"를 실제 프로젝트 ID 및 컬렉션 이름으로 대체해야 합니다.
        )

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()

        if (data && data.fields) {
            // Firebase Firestore의 데이터 형식에 따라 필드를 추출하여 원하는 형태로 가공할 수 있습니다.
            console.log(data)
            const itemData = {
                id: id,
                // 다른 필드도 여기에서 추출하여 사용할 수 있습니다.
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

export const getItemsAPI = async ({ id }) => {
    try {
        const response = await fetch(
            `https://firestore.googleapis.com/v1/projects/gogogosol/databases/(default)/documents/items`,
            // 위 URL에서 "your-project-id"와 "rooms"를 실제 프로젝트 ID 및 컬렉션 이름으로 대체해야 합니다.
        )

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()

        if (data && data.fields) {
            // Firebase Firestore의 데이터 형식에 따라 필드를 추출하여 원하는 형태로 가공할 수 있습니다.
            console.log(data)
            const itemData = {
                id: id,
                // 다른 필드도 여기에서 추출하여 사용할 수 있습니다.
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

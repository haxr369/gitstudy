import { db } from '@/app/firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'

const datas = [
    {
        company: '가지랩',
        position: 'Product Owner (PO)',
        region: '서울.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Product Designer',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Contents Marketer',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] QA Specialist',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Clinical Data Consultant(CS Area/2년이상)',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Clinical Data Consultant(DM area/2년이상)',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Product Owner',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Senior Front-end Software Engineer',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Senior Back-end Software Engineer',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Senior Fullstack Software Engineer',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Back-end Software Engineer',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Front-end Software Engineer',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Fullstack Software Engineer',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
    {
        company: '제이앤피메디(JNPMEDI)',
        position: '[100억↑투자] Product QA Engineer',
        region: '인천.한국',
        reward: '100',
        imgUrl: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26254%2Fba7sbx8m4pym1lmt__1080_790.jpg&w=1000&q=75',
    },
]

export const addEventData = async () => {
    datas.map(async (data, id) => {
        await setDoc(doc(db, 'eventCompany', `${id + 1}`), data)
    })
}

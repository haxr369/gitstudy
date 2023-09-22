// import Phragraph from '@/app/event/component/phragraph'
import { GetStaticProps } from 'next'
import Image from 'next/image'
// import type { InferGetStaticPropsType, GetStaticProps } from 'next'
// import { getEventCompany, getEventPage } from '@/app/apis/getEventPage'
export default function EventPage(props) {
    console.log(props)
    return (
        <>
            <div>
                <div
                    className={`relative w-full mt-[70px] overflow-hidden desktop:h-[300px] mobile:h-[400px]`}>
                    <Image
                        src="https://static.wanted.co.kr/images/banners/themes/452_aead3640.jpg"
                        fill
                        className="object-cover mobile:w-full"
                        alt="kakao ventures"
                        quality={100}
                    />
                </div>
                {/* <Phragraph /> */}
                <div>이벤트 설명</div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    return []
}

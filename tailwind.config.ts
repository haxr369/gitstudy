import type { Config } from 'tailwindcss'

// 작성된 tailwind 스타일 CSS 코드로 변환 완료시 삭제예정 - 20230829 by 정윤정
const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/c omponents/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            mobile: { max: '600px' },
            desktop: { min: '601px' },
        },
        colors: {
            // 여기어때 메인 컬러
            'main-red': '#f7323f',
            white: '#ffffff',
            black: '#000000de',
        },
        extend: {
            spacing: {
                '424px': '424px',
                '962px': '962px',
            },
            lineHeight: {
                '48px': '48px',
            },
        },
    },
    plugins: [],
}
export default config

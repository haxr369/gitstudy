import type { Config } from 'tailwindcss'

// 작성된 tailwind 스타일 CSS 코드로 변환 완료시 삭제예정 - 20230829 by 정윤정
const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            // => @media (min-width: 640px) { ... }
            sm: '640px',
            // => @media (min-width: 768px) { ... }
            md: '768px',
            // => @media (min-width: 1024px) { ... }
            lg: '1024px',
        },
        colors: {
            // 여기어때 메인 컬러
            'main-red': '#f7323f',
            white: '#ffffff',
            black: '#000000de',
        },
        extend: {},
    },
    plugins: [],
}
export default config

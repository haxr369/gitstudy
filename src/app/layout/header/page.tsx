'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import { usePathname } from 'next/navigation'

import SearchIcon from '@mui/icons-material/Search'
import SrchBar from '@/app/components/SrchBar'

import style from '@/app/layout/header/header.module.scss'

export const navLinks = [
    // path 수정 필요 - 20230825 by oliv (수정 완료시 주석 삭제)
    {
        name: '숙소찾기',
        path: '/room/motel',
    },
    {
        name: '예약내역',
        path: '/',
    },
    {
        name: '더보기',
        path: '/more',
        sub: [
            {
                name: '공지사항',
                path: '/',
            },
            {
                name: '이벤트',
                path: '/',
            },
            {
                name: '자주 묻는 질문',
                path: '/',
            },
            {
                name: '1:1문의',
                path: '/',
            },
        ],
    },
    {
        name: '로그인',
        path: '/user',
    },
]

const Header = () => {
    // 로그인 페이지에서 Header 컴포넌트 가리기
    // const pathname = usePathname()
    // if (pathname === '/user') return null

    // 스크롤시 header 스타일 변경

    const [scrPosition, setscrPosition] = useState(0)
    const checkScroll = () => {
        setscrPosition(window.scrollY || document.documentElement.scrollTop)
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScroll)
        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    }, [])

    // 클릭시 검색바 show & hide
    const [srchBarOpen, setsrchBarOpen] = useState(false)
    const handleSrchBar = () => {
        setsrchBarOpen(!srchBarOpen)
    }

    return (
        <header
            className={
                scrPosition < 60
                    ? style.header
                    : `${style.header} ${style.scroll}`
            }>
            <div className={style.gnb}>
                <h1 className={style.gnbLogo}>
                    <Link href="/">여기어때.</Link>
                </h1>
                <button
                    type="button"
                    className={
                        srchBarOpen
                            ? `${style.btnSrch} ${style.opened}`
                            : style.btnSrch
                    }
                    onClick={handleSrchBar}>
                    <SearchIcon className={style.btnSrchIcon} />
                    <span className="blind">검색</span>
                </button>
                <ul
                    className={
                        srchBarOpen ? `${style.gnbCata} hide` : style.gnbCata
                    }>
                    {navLinks.map((link, idx) => {
                        if (link.path !== '') {
                            return (
                                <li key={idx}>
                                    <Link
                                        href={link.path}
                                        className={style.gnbCataLink}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        } else {
                            return (
                                <li key={idx}>
                                    <span className={style.gnbCataLink}>
                                        {link.name}
                                        <ul className={style.gnbCataSub}>
                                            {link.sub.map((subLink, subIdx) => {
                                                return (
                                                    <li key={subIdx}>
                                                        <Link
                                                            href={subLink.path}>
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </span>
                                </li>
                            )
                        }
                    })}
                </ul>
                {srchBarOpen && (
                    <SrchBar
                        srchBarOpen={srchBarOpen}
                        handleSrchBar={handleSrchBar}
                    />
                )}
            </div>
        </header>
    )
}

export default Header

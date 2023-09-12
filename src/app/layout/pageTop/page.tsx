import React from 'react'
import style from '@/app/layout/pageTop/pageTop.module.scss'

const PageTop = ({ title }) => {
    return (
        <div className={style.top}>
            <div className="inner">
                <h2 className={style.topTit}>{title}</h2>
            </div>
        </div>
    )
}

export default PageTop

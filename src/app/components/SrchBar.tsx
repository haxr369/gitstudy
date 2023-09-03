import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

import style from '../styles/header.module.scss'

const SearchBar = ({ srchBarOpen, handleSrchBar }) => {
    return (
        <div className={style.srchBar}>
            <div className={style.srchBarWrap}>
                <input
                    type="text"
                    id="keyword"
                    placeholder="지역, 숙소명"
                    autoComplete="off"
                />
                <button type="button" className={style.btnSrch}>
                    <SearchIcon className={style.btnSrchIcon} />
                    <span className="blind">검색</span>
                </button>
            </div>
            <button className={style.btnCancel}>
                <CloseIcon
                    className={style.btnCancelIcon}
                    onClick={() => handleSrchBar(srchBarOpen)}
                />
                <span className="blind">닫기</span>
            </button>
        </div>
    )
}

export default SearchBar

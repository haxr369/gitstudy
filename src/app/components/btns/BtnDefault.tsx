import React from 'react'
import style from '@/app/components/btns/btn.module.scss'

const BtnDefault = ({ ...props }) => {
    return (
        <button
            disabled={props.disable}
            onClick={props.onClick}
            className={
                // `
                `${style.btnDefault} ${props.disable ? style.disable : ''} ${
                    props.style == 'sub' ? style.sub : ''
                }`
                // ${
                //     props.sub == 'sub' ? style.sub : ''
                // }`
                // `${style.btnDefault} ${props.disabled && style.disabled} ${
                //     props.sub && style.sub
                // }`

                // props.disable
                //     ? `${style.btnDefault} ${style.disabled}`
                //     : style.btnDefault
            }>
            {props.text}
        </button>
    )
}

export default BtnDefault

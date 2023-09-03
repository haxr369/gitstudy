'use client'
import Link from 'next/link'
import login_style from '../styles/login.module.css'
import { useState } from 'react'
import '../../../public/fonts/style.css'

function Btn(props: { title: string; bg_color: string; color: string }) {
    return (
        <button
            className={login_style.snsBtn}
            style={{ backgroundColor: props.bg_color, color: props.color }}>
            {props.title}로 로그인
        </button>
    )
}

function Input(props) {
    return (
        <div className={login_style.login_input}>
            <input
                type={props.type}
                name={props.id}
                placeholder={props.placeholder}
            />
        </div>
    )
}

{
}

export default function Login() {
    let [LoginSNS, setLoginSNS] = useState<string[]>([' 카카오톡으', ' Google'])

    return (
        <>
            <main className={login_style.background}>
                <section className={login_style.section_box}>
                    <form>
                        <input type="hidden"></input>
                        <div className={login_style.title_logo}>
                            <strong className={login_style.logo}>
                                <Link href="/">여기어때.</Link>
                            </strong>
                        </div>

                        <div className={login_style.snsBtn_box}>
                            <Btn
                                title={LoginSNS[0]}
                                bg_color="rgb(252,229,30)"
                                color="black"></Btn>
                            <Btn
                                title={LoginSNS[1]}
                                bg_color="rgb(24,119,242)"
                                color="white"></Btn>
                        </div>

                        <div className={login_style.or_box}>
                            <p className={login_style.space_or}>
                                <span>또는</span>
                            </p>
                        </div>

                        <Input
                            type="email"
                            name="id"
                            placeholder="이메일 주소"
                            data-msg-required="이메일 주소를 입력해 주세요."></Input>

                        <Input
                            type="password"
                            name="pw"
                            placeholder="비밀번호"></Input>

                        <div
                            className={`${login_style.snsBtn_box} ${login_style.login_btn}`}>
                            <button
                                className={login_style.snsBtn}
                                type="submit">
                                로그인
                            </button>
                        </div>

                        <div className={login_style.footer_box}>
                            <div className={login_style.join_box}>
                                <div className={login_style.textbox}>
                                    <a href="https://www.goodchoice.kr/user/join">
                                        <span>비밀번호 재설정</span>
                                    </a>
                                </div>
                            </div>

                            <div className={login_style.join_box}>
                                <div className={login_style.textbox}>
                                    <a href="https://www.goodchoice.kr/user/join">
                                        <span>회원가입</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

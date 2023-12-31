// 'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/layout/header/page'
import Footer from '@/app/layout/footer/page'

import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <div className="wrap bg-white">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}

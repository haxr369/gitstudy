import Link from 'next/link'

export default function RoomLayout({
    children,
}: {
    children: React.ReactNode
}) {
    //<PageTop title={title}></PageTop>
    return (
        <div className="content">
            <div className="inner px-[31px] flex gap-4">
                <Link href={`/room/motel`}>모텔</Link>
                <Link href={`/room/hotel`}>호텔·리조트</Link>
                <Link href={`/room/pension`}>펜션</Link>
                <Link href={`/room/gHouse`}>게스트하우스</Link>
                <Link href={`/room/camping`}>캠핑·글램핑</Link>
            </div>
            {children}
        </div>
    )
}

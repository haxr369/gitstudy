import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    console.log(request.headers)
    const res = await fetch('http://localhost:8080/oauth/loginInfo', {
        method: 'GET',
        headers: request.headers,
    })

    if (res.ok) {
        const bodyText = await res.text()
        console.log(bodyText)
        // const refined = data.map((singleData) => console.log(singleData))
        return NextResponse.json({ bodyText })
    }
}

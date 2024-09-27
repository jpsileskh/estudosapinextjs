import { NextResponse } from "next/server"

export function GET(res) {
    return NextResponse.json(
        { msg: "Olá mundo!" },
        { status: 200 }
    )
}
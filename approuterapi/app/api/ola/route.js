import { NextResponse } from "next/server"

export function GET(res) {
    return NextResponse.json(
        {nome: "João"},
        {status: 200}
    )
}
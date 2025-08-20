import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    console.log("Route Hit")
    return NextResponse.json({
        status:500
    })
}
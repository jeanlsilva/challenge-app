import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../prisma/prismaClient"

export async function POST(request: NextRequest) {
    const data = await request.json()
    const tasks = await prisma.task.createMany({
        data,
    })

    return NextResponse.json({ tasks })
}
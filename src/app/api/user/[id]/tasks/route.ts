import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../prisma/prismaClient"

interface RequestParams {
    params: {
        id: string
    }
}

export async function GET(request: NextRequest, { params }: RequestParams) {
    const { id: userId } = params
    const tasks = await prisma.task.findMany({ where: { userId }})

    return NextResponse.json({ tasks })
}
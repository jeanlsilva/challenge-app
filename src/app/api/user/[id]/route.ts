import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../prisma/prismaClient"

interface RequestParams {
    params: {
        id: string
    }
}

export async function GET(request: NextRequest, { params }: RequestParams) {
    const { id } = params
    const user = await prisma.user.findUnique({ where: { id }, include: { tasks: true } })

    return NextResponse.json({ user })
}
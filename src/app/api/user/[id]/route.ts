import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

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
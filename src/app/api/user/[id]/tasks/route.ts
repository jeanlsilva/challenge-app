import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

interface RequestParams {
    params: {
        id: string
    }
}

export async function GET(request: NextRequest, { params }: RequestParams) {
    const { id: userId } = params
    const user = await prisma.task.findMany({ where: { userId }})

    return NextResponse.json({ user })
}
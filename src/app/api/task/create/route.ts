import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const data = await request.json()
    const tasks = await prisma.task.createMany({
        data,
    })

    return NextResponse.json({ tasks })
}
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface RequestParams {
    params: {
        id: string
    }
}

const prisma = new PrismaClient()

export async function PUT(request: NextRequest, { params }: RequestParams) {
    const json = await request.json()
    const { id } = params
    
    const { id: userId, tasks, ...rest } = json

    const user = await prisma.user.update({
        data: {
            ...rest,
            tasks: {
                create: tasks
            }
        },
        where: {
            id
        }
    })

    return NextResponse.json({ user })
}
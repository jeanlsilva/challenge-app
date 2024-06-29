import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../prisma/prismaClient"

interface RequestParams {
    params: {
        id: string
    }
}

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
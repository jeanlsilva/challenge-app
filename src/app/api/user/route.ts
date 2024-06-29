import { USERS_PER_PAGE } from "@/constants";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../prisma/prismaClient"

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams
        const page = searchParams.get('page')

        const total = await prisma.user.count()

        const users = await prisma.user.findMany({
            skip: page ? USERS_PER_PAGE * (Number(page) - 1) : 0,
            take: USERS_PER_PAGE
        });

        return NextResponse.json({ users, total })
    } catch (error: any) {
        return NextResponse.json({ error })
    }
}
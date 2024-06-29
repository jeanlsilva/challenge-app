import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const json = await request.json()

    const response = await prisma.user.create({
        data: {
            name: json.name,
            email: json.email,
            address: json.address
        }
    })

    return NextResponse.json({ response })
}
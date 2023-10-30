import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prismadb from '@/libs/prismadb';

export async function POST(req: Request) {
    // Only want POST request
    if (req.method !== 'POST') {
      return new NextResponse("prohibited method", { status: 405 });
    }

    try {
      const body = await req.json();
      const { email, name, password } = body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email
      }
    })

    if (existingUser) {
      return new NextResponse("Email already taken", { status: 422 });
    }
    
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      }
    })

    console.log("User created successfully")
    return NextResponse.json({ user }, {status: 200})   
  } catch (error) {
    return new NextResponse("Something went wrong", {status: 400 })
  }
}
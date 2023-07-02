import User from "@/models/User";
import connect from "@/utils/db";
// import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const bcryptSalt = bcrypt.genSaltSync(10);

export const POST = async (request: Request) => {
  const { username, email, password } = await request.json();
 
//   console.log(username, email, password);

 
  try {
    await connect();
    const hashedPassword = await bcrypt.hash(password, bcryptSalt)

    const newUser = await User.create({
      username,
      email,
      password:hashedPassword,
    });
    // await newUser.save()
    return  NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.messase, {
      status: 500,
    });
  }
};

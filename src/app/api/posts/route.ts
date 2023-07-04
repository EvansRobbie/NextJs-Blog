import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request:Request) =>{
    const url = new URL(request.url)
    // console.log(url)
    const username:any = url.searchParams.get("username")
    // console.log(username)
    try {
        await connect()
        const posts = await Post.find(username && {username})
        return  NextResponse.json(posts, {status:200})
    } catch (error) {
        
        return new NextResponse('Database Error', {status: 500})
    }



}

export const POST = async (request: Request) => {
    const body = await request.json();
   
    // console.log(body);
  
   
    await connect();

    const newPost = await Post.create(body);
    try {
      // await newUser.save()
      return  NextResponse.json(newPost, { status: 201 });
    } catch (error: any) {
      return new NextResponse(error.messase, {
        status: 500,
      });
    }
  };
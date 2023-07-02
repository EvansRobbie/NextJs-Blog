import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request:Request, {params:{id}}:{params:{id:String}}) =>{
    // console.log(id)
    try {
        await connect()
        const post = await Post.findById(id)
        return  NextResponse.json(post, {status:200})
    } catch (error) {
        
        return new NextResponse('Database Error', {status: 500})
    }



}
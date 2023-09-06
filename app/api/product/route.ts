import { NextResponse } from 'next/server'
import axios from "axios";

export async function GET(req,res) {
    try {
        //const data=await axios.post("http://localhost:3000/product",req.body)
        const data=await axios.get("http://localhost:3000/product")
        return NextResponse.json(data.data)
    }
    catch (e) {
        console.log(e)

    }
}


export async function POST(req,res) {
    try {
        const body=await req.json()
        if (body.type=="DELETE"){
            const data=await axios.delete("http://localhost:3000/product/"+body.id)
            return NextResponse.json(data.data)
        }
        const data=await axios.post("http://localhost:3000/product",body)
        return NextResponse.json(data.data)
    }
    catch (e) {
        console.log(e)

    }
}


export async function PUT(req,res) {
    try {
        const body=await req.json()
        const {id}=body
        delete body.id;
        const data=await axios.put("http://localhost:3000/product/"+id,body)
        return NextResponse.json(data.data)
    }
    catch (e) {
        console.log(e)

    }

}
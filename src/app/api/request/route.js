import connect from '@/dbconfig/connect';
import { NextResponse } from 'next/server';
import Request from '@/models/request';
connect();
export async function POST(req) {
    try {
        const body = await req.json();
        const user = await Request.create(body);
        return NextResponse.json( {
            message:"Request sent sucessfully."
        });
    } catch (error) {
        return NextResponse.json( {
            message:"Somthing went wrong. "
        });
    }
}
export async function GET(req) {
    try {
        //  body = await req.json();
        const user = await Request.find();
        return NextResponse.json( {
            user
        });
    } catch (error) {
        return NextResponse.json( {
            message:"Data not loaded! "
        });
    }
}

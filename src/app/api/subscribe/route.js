import connect from '@/dbconfig/connect';
import { NextResponse } from 'next/server';
import Subscribe from '@/models/subscribe';
connect();
export async function POST(req) {
    try {
        const body = await req.json();
        const user = await Subscribe.create(body);
        return NextResponse.json( {
            message:"Subscribe sucessfully."
        });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json( {
            message:"Somthing went wrong."
        },
        {
            status:400
        });
    }
}
export async function GET(req) {
    try {
        //  body = await req.json();
        const user = await Subscribe.find();
        return NextResponse.json( {
            user
        });
    } catch (error) {
        return NextResponse.json( {
            message:"Data not loaded! "
        });
    }
}

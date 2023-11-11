import connect from '@/dbconfig/connect';
import { NextResponse } from 'next/server';
import User from '@/models/users';
connect();
export async function POST(req) {
    try {
        
        const body = await req.json();
        console.log(body.name);
        const user = await User.create(body);
        return NextResponse.json( {
            message:"User addes sucessfully",
            // user:user

        });
    } catch (error) {
        return NextResponse.json( {
            message:"Data not loaded! ",
            massage:error
        });
    }
}
export async function GET(req) {
    try {
         body = await req.json();
        const user = await User.find();
        return NextResponse.json( {
            user,
            massage:"Sucessfull"
        });
    } catch (error) {
        return NextResponse.json( {
            message:"Data not loaded! "
        });
    }
}

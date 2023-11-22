import connect from '@/dbconfig/connect';
import { NextResponse } from 'next/server';
import User from '@/models/users';
connect();
export async function POST(req) {
    try {
        const {email} = await req.json();
        const user = await User.findOne({email});
        return NextResponse.json( {
            user,
            massage:"Sucessfull"
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json( {
            message:"Data not loaded! ",
            error
        });
    }
}
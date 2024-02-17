import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

import {NextRequest,NextResponse} from "next/server";
export async function middleware(req: NextRequest) {
    const res=NextRequest.next();
    const supabase = createMiddlewareClient({req,res});
    const{
        dat:{
            session
        }
    }=await supabase.auth.getSession();
    if(!session){
        return NextResponse.rewrite(new URL("/login",req.url))
    }
};
export default supabase;
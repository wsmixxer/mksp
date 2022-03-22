import { handleLogin } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function signup(req:NextApiRequest, res:NextApiResponse){
    try {
        await handleLogin(req, res, {
            authorizationParams: {
                screen_hint: 'signup'
            }
        });
    } catch (error:unknown) {
        if(error instanceof Error){
            res.status(400).end(error.message)
        }
        
    }
}
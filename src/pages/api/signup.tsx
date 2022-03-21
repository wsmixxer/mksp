import { handleLogin } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function signup(req, res){
    try {
        await handleLogin(res, req, {
            authorizationParams: {
                screen_hint: 'signup'
            }
        });
    } catch (error) {
        res.status(error.status || 400).end(error.message)
    }
}
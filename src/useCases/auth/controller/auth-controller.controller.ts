import { controller, Get, Post } from "@expressots/adapter-express";

@controller("/auth/controller")
export class AuthControllerController {
    @Post("/auth/register")
    createUser(){
        
    }

    @Post("/auth/login")
    loginUser(){

    }


    @Post("/auth/refresh-token")
    refToken(){

    }
}

import { controller, Post, body } from "@expressots/adapter-express";

@controller("/auth")
export class AuthController {
    @Post("/register")
    createUser(@body() userData: any) {
        return { message: "User registered successfully" };
    }

    @Post("/login")
    loginUser(@body() loginData: any) {
        return { message: "User logged in successfully" };
    }

    @Post("/refresh-token")
    refreshToken(@body() tokenData: any) {
        return { message: "Token refreshed successfully" };
    }
}
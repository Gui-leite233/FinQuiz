import { controller, Post, body } from "@expressots/adapter-express";
import { inject } from "@expressots/core";
import { RegisterUserUseCase } from "../use-cases/register-user.usecase";
import { RegisterUserDto } from "../dtos/register.dto";
import { UserEntity } from "@entities/user/user.entity";

@controller("/auth")
export class AuthController {
    constructor() {
        console.log("AuthController initialized with routes:");
        console.log(" - POST /auth/register");
    }

    @inject(RegisterUserUseCase)
    private readonly registerUserUseCase: RegisterUserUseCase;

    @Post("/register")
    createUser(@body() userData: RegisterUserDto) {
        console.log("Register endpoint hit");
        console.log("Request body:", userData);
        
        // Add defensive check to handle undefined data
        if (!userData) {
            return { error: "No registration data provided" };
        }
        
        try {
            // Create user manually if data is coming through but not being parsed correctly
            const user = new UserEntity();
            user.name = userData.name || "Default Name";
            user.email = userData.email || "default@example.com";
            user.password = userData.password || "defaultpassword";
            user.biography = userData.biography || "Default bio";
            
            return user;
        } catch (error) {
            console.error("Error creating user:", error);
        }
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
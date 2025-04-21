import { provide } from "@expressots/core";
import { UserEntity } from "@entities/user/user.entity";
import { RegisterUserDto } from "../dtos/register.dto";

@provide(RegisterUserUseCase)
export class RegisterUserUseCase {
    execute(dto: RegisterUserDto): UserEntity {
        console.log("Processing DTO in use case:", dto);
        
        
        if (!dto) {
            throw new Error("Registration data is required");
        }
        
        
        const user = new UserEntity();
        
        
        user.name = dto.name || "";
        user.email = dto.email || "";
        user.password = dto.password || ""; 
        user.biography = dto.biography || "";
        
        console.log("Created user entity:", user);
        
        return user;
    }
}
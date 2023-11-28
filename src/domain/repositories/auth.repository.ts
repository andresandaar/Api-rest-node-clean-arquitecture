import { RegisterUserDto } from "../";
import { UserEntity } from "../entities/user.entity";

export  abstract class AuthRepository {
//todo
//abstract login()
abstract register(registerUserDto:RegisterUserDto):Promise<UserEntity> 
}
import { LoginUserDto, RegisterUserDto } from "../";
import { UserEntity } from "../entities/user.entity";

export  abstract class AuthDatasource {
  //abstract login()
  abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>;
  //abstract register()
  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
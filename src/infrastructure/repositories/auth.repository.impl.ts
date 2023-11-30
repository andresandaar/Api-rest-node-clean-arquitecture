import { AuthDatasource, AuthRepository, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {

    constructor(private readonly authDatasourse:AuthDatasource) { }

    login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.authDatasourse.login(loginUserDto);
    };

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
       return this.authDatasourse.register(registerUserDto)
    };
}
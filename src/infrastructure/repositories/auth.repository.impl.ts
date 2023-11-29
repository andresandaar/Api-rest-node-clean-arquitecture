import { AuthDatasource, AuthRepository, RegisterUserDto, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {

    constructor(private readonly authDatasourse:AuthDatasource) { };

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
       return this.authDatasourse.register(registerUserDto)
    };
}
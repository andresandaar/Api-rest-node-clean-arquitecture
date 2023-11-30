import { AuthRepository, CustomError } from "../..";
import { JwtAdapter } from "../../../config";
import { RegisterUserDto } from "../../dtos/auth/registerUser.dto";
interface User {
    id: string;
    name: string;
    email: string;
}
interface UserToken {
    token: string;
    user: User;
}

type SingToken =(payload: Object, duration?: string) => Promise<string | null>
interface RegisterUserUseCase {
    execute(registerUserDto: RegisterUserDto): Promise<UserToken>;
}

export class RegisterUser implements RegisterUserUseCase {

    constructor(
        private readonly authRepository: AuthRepository,
        private readonly signToken: SingToken = JwtAdapter.generateToken,
        ){ }

    async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {
        //Crear usuario
        const user = await this.authRepository.register(registerUserDto);

        //Token
       const token =await  this.signToken({id:user.id},'2h');
       if(!token) throw CustomError.internalServer('Error generate token')

        return {
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        };
    }
}
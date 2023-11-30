import { AuthRepository, CustomError } from '../..';
import { JwtAdapter } from '../../../config';
import { LoginUserDto } from '../../dtos/auth/loginUser.dto';
interface User {
  id: string;
  name: string;
  email: string;
}
interface UserToken {
  token: string;
  user: User;
}

type SingToken = (payload: Object, duration?: string) => Promise<string | null>;
interface LoginUserUseCase {
  execute(loginUserDto: LoginUserDto): Promise<UserToken>;
}

export class LoginUser implements LoginUserUseCase {
  
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SingToken = JwtAdapter.generateToken
  ) {}

  async execute(loginUserDto: LoginUserDto): Promise<UserToken> {
    //login user
    const user = await this.authRepository.login(loginUserDto);

    //Token
    const token = await this.signToken({ id: user.id }, '2h');
    if (!token) throw CustomError.internalServer('Error generate token');

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

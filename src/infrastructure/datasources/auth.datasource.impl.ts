import {
  AuthDatasource,
  CustomError,
  RegisterUserDto,
  UserEntity
} from '../../domain';
import { UserModel } from '../../data/mongodb/index';
import { BcryptAdapter } from '../../config';
import { UserMapper } from '../../infrastructure';
type HashFuntion = (passwordFlat: string) => string;
type CompareFuntion = (passwordFlat: string, hashed: string)=>boolean;

export class AuthDatasourceImpl implements AuthDatasource {
  constructor(
    private readonly hashPassword: HashFuntion = BcryptAdapter.hash,
    private readonly comparePassword: CompareFuntion = BcryptAdapter.compare
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;
    try {
      //Verificar si el correo existe
      const exists = await UserModel.findOne({ email });
      if (exists)
        throw CustomError.badRequest(
          `Las Credenciales no son correctas (-quita-email)`
        );

        //hash de contraseña
        const user = await UserModel.create({
          name: name,
          email: email,
          password: this.hashPassword(password)
        });
        await user.save();
      //mapear la respuesta a nuestra entidad
      return UserMapper.userEntityFromObject(user);
      
    } catch (error) {
      if (error instanceof CustomError) {
        /* console.log('okerror',error) */
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}

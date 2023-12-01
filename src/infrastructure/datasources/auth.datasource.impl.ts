import {
  AuthDatasource,
  CustomError,
  LoginUserDto,
  RegisterUserDto,
  UserEntity
} from '../../domain';
import { UserRepositoryMongo } from '../../database/mongodb';
import { BcryptAdapter } from '../../config';
import { UserMapper } from '../../infrastructure';
type HashFuntion = (passwordFlat: string) => string;
type CompareFuntion = (passwordFlat: string, hashed: string) => boolean;

export class AuthDatasourceImpl implements AuthDatasource {
  constructor(
    private readonly hashPassword: HashFuntion = BcryptAdapter.hash,
    private readonly comparePassword: CompareFuntion = BcryptAdapter.compare,
    private readonly userRepositoryMongo: UserRepositoryMongo = new UserRepositoryMongo()
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const { email, password } = loginUserDto;
    try {
      //Verificar si el correo existe
      const user = await this.userRepositoryMongo.findByEmail(email);
      /* const user = await UserModel.findOne({ email: email }); */
      if (!user)
        throw CustomError.badRequest(
          `Las Credenciales no son correctas (-quita-email)`
        );
      //Comprobar contraseña
      const verifyPassword = this.comparePassword(password, user.password);
      if (!verifyPassword)
        throw CustomError.badRequest(
          `Las Credenciales no son correctas (-quita-contraseñal)`
        );

      //mapear la respuesta a nuestra entidad
      return UserMapper.userEntityFromObject(user);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;
    try {
      //Verificar si el correo existe
      const exists = await this.userRepositoryMongo.findByEmail(email);
      if (exists)
        throw CustomError.badRequest(
          `Las Credenciales no son correctas (-quita-email)`
        );

      //hash de contraseña
      const newUser = {
        name: name,
        email: email,
        password: this.hashPassword(password)
      };
      const user = await this.userRepositoryMongo.create(newUser);

      //mapear la respuesta a nuestra entidad
      //desde aqui podemos manipular los valores que se entregaran al usuario
      return UserMapper.userEntityFromObject(user);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}

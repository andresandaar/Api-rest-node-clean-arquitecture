import {
  AuthDatasource,
  CustomError,
  RegisterUserDto,
  UserEntity
} from '../../domain';
import { UserModel } from '../../data/mongodb/index';

export class AuthDatasourceImpl implements AuthDatasource {

  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {

    const { name, email, password } = registerUserDto;
    console.log(registerUserDto)

    try {
      //Verificar si el correo existe
      const exists = await UserModel.findOne({ email });
      if (exists) throw CustomError.badRequest(
        `El usuario con el correo ${email}  ya existe en la base de datos`
      );
      console.log(exists)
      const user = await UserModel.create({
        name: name,
        email: email,
        password: password
      });
      await user.save();
      //hash de contraseña
      //mapear la respuesta a nuestra entidad
      return new UserEntity(user.id, name, email, password, ['ADMIN_ROLE']);
    } catch (error) {
        if (error instanceof CustomError) {
          /* console.log('okerror',error) */
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

}

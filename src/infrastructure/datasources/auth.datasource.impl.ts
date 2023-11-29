import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";

export class AuthjDatasourceImpl implements AuthDatasource {

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto;
        try {
            //Verificar si el correo existe
            //hash de contraseña
            //mapear la respuesta a nuestra entidad
            return new UserEntity(
                '1',
                name,
                email,
                password,
                ['ADMIN_ROLE']
            )

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer();
        }
    }
}
import { CustomError, UserEntity } from '../../domain';

export class UserMapper {

  static userEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, name, email, password, roles } = object;
    if (!_id || !id) {
      throw CustomError.badRequest('Mission id');
    }
    if (!name || !email || !password || !roles) {
      throw !name
        ? CustomError.badRequest('Missing name')
        : !email
        ? CustomError.badRequest('Missing email')
        : !password
        ? CustomError.badRequest('Missing password')
        : !roles
        ? CustomError.badRequest('Missing roles')
        : '';
    }
    return new UserEntity(_id || id, name, email, password, roles);
  }
  
}

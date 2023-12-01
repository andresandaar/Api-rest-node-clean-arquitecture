
import { UserModel } from '../';
import { User } from '../interfaces/user.interface';


export class UserRepositoryMongo {

  findByEmail = async (email: string): Promise<User | null> => {
    return UserModel.findOne({ email });
  };

 create = async (userDetails: {[key: string]: any}): Promise<User> => {
    const user = await UserModel.create(userDetails)
    await user.save();
    return user;
  };
}

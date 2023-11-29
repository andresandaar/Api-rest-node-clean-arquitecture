import { Schema, model } from 'mongoose';


const UserSchema = new Schema(
  {
    //_id: {    type: String, _id:false},
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: 2,
      maxlength: 50
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6
    },
    img: { type: String},
    role: { type: [String],default:['USER_ROLE'] , enum:['USER_ROLE','ADMIN_ROLE'] }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
export const UserModel = model('User', UserSchema);



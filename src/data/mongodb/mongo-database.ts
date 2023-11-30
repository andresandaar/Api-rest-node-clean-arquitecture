import mongoose from 'mongoose';
interface Options {
  mongoUrl: string;
  dbName: string;
}
export class MongoDatabase {
  static connect = async (options: Options) => {

    const { dbName, mongoUrl } = options;
    try {
      await mongoose.connect(mongoUrl, {
        dbName: dbName
      });
      console.log('Mongo connected');
      return true;
    } catch (error) {
      console.error('Mongo connection error');
      throw error;
    }
  };
}
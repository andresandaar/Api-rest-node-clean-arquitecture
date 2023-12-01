import mongoose from 'mongoose';

interface Properties {
  uri: string;
  options: mongoose.ConnectOptions;
}

export class MongoDatabase {
  private readonly uri: string;
  private readonly options: mongoose.ConnectOptions;

  constructor(properties: Properties) {
    const { uri, options } = properties;
    this.uri = uri;
    this.options = options;
  }
  connect = async () => {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log('Mongo connected');
      return true;
    } catch (error) {
      console.error('Mongo connection error');
      throw error; 
    }
  };

}


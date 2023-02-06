import {UsersModel} from '../dao/models/user.models.js'


export async function createUser(data) {
    try {
      const userExist = await getUser(data.email);
      if (userExist) {
        throw new Error("El usuario ya existe ");
      } else {
        const user = await UsersModel.create(data);
        return user;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  export async function getUser(email) {
    try {
      const user = await UsersModel.find({ email }).lean();
      return user[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
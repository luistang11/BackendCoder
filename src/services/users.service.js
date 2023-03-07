import { UsersModel } from "../dao/models/user.models.js";
import bcrypt from "bcrypt";

export async function createUser(data) {
  try {
    const userExist = await getUser(data.email);
    if (userExist) {
      throw new Error("El usuario ya existe ");
    } else {
      data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
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

export async function updateUser(email, data, updatePassword = false) {
  try {
    const user = await getUser(email);
    if (user) {
      if (data.password) {
        if (updatePassword) {
          data.password = bcrypt.hashSync(
            data.password,
            bcrypt.genSaltSync(10)
          );
        } else {
          delete data.password;
        }
      }
      const user = await UsersModel.findOneAndUpdate(
        { email },
        { ...data },
        { new: true }
      );
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

import { MessagesModel } from "../dao/models/messages.models.js";

export async function getMessages() {
  try {
    const messages= await MessagesModel.find();
    return messages
  } catch (error) {
    throw new Error(error.message);
  }
}


export async function postMessage(chat){

  try {
    const message=await MessagesModel.create(chat)
    return message
  } catch (error) {
    throw new Error(error.message);
  }

}

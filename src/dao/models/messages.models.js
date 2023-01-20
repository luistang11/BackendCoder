import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema(
  {
    user: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

schema.plugin(mongooseDelete, { deletedAt: true });

export const MessagesModel = mongoose.model("messages", schema);

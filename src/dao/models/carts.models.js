import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema(
  {
    productos: [{
        type:String,
    }],
  },
  { timestamps: true }
);

schema.plugin(mongooseDelete, { deletedAt: true });

export const CartsModel = mongoose.model("carts", schema);

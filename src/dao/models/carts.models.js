import {Schema,model} from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new Schema(
  {
    productos: [{
      type: Schema.Types.ObjectId,
      ref: "products",
      default: [],
    }],
  },
  { timestamps: true }
);

schema.plugin(mongooseDelete, { deletedAt: true });

export const CartsModel = model("carts", schema);

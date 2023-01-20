import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";


const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

schema.plugin(mongooseDelete, { deletedAt: true });

export const ProductsModel = mongoose.model("products", schema);

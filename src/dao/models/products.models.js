import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";
import pagination from "mongoose-paginate-v2";

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

schema.plugin(pagination);
schema.plugin(mongooseDelete, { deletedAt: true });

export const ProductsModel = mongoose.model("products", schema);

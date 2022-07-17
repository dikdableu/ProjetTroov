import { Schema, model, models } from "mongoose";

const receiptsSchema = new Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  Img: {
    data: Buffer,
    type: String,
    required: true,
  },
});

const Receipts = models.Receipts || model("Receipts", receiptsSchema);

export default Receipts;

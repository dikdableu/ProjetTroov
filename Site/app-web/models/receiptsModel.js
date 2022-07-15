import { Schema, model, models } from "mongoose";

const receiptsSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Img: {
    data: Buffer,
    contentType: String,
    required: true,
  },
});

const Receipts = models.Receipts || model("Receipts", receiptsSchema);

export default Receipts;

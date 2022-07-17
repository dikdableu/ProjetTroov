import connectMongo from "../../../utils/connectMongo";
import Receipts from "../../../models/receiptsModel";

export default async function addReceipts(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");
    console.log("CREATING DOCUMENT");
    await Receipts.create(JSON.parse(req.body), async function (err) {
      if (err) {
        res.status(400).json({ error: "oops il y a eu une erreur " });
      } else {
        const listReceipts = await Receipts.find();
        if (listReceipts.length > 0) {
          res.status(200).json({
            success: "La recette à bien été ajouté !",
            data: listReceipts,
          });
        } else {
          res.status(400).json({ error: "oops il y a eu une erreur " });
        }
      }
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

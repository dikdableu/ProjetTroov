import connectMongo from "../../../utils/connectMongo";
import Receipts from "../../../models/receiptsModel";

export default async function deleteReceipts(req, res) {
  try {
    await connectMongo();
    const body = JSON.parse(req.body);
    await Receipts.findByIdAndRemove(
      { _id: body.id },
      async function (err, result) {
        console.log(err);
        if (err) {
          res.status(400).json({ error: "oops il y a eu une erreur " });
        } else {
          const listReceipts = await Receipts.find();
          if (listReceipts.length > 0) {
            res.status(200).json({
              success: "la recette a bien été supprimé !",
              data: listReceipts,
            });
          } else {
            res.status(400).json({ error: "oops il y a eu une erreur " });
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}

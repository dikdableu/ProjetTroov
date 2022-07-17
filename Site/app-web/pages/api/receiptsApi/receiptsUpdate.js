import connectMongo from "../../../utils/connectMongo";
import Receipts from "../../../models/receiptsModel";

export default async function updateReceipts(req, res) {
  try {
    await connectMongo();
    const body = JSON.parse(req.body)
    await Receipts.findByIdAndUpdate(
      body.id,
      {
        Title: body.Title,
        Img: body.Img,
      },
      async function (err, result) {
        if(err) {
          res
            .status(400)
            .json({ error: "oops il y a eu une erreur ", message: err });
        } else {
          const listReceipts = await Receipts.find()
          if (listReceipts.length > 0) {
            res.status(200).json({
            success: "la recette a été mise à jour !",
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

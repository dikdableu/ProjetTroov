import connectMongo from '../../../utils/connectMongo';
import Login from '../../../models/loginModel';

export default async function addLogin(req, res) {
  try {
    
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');
    console.log('CREATING DOCUMENT');
    await Login.create(JSON.parse(req.body), function (err) {
        if (!err) {
          res.status(200).json({ success: "l'utilisateur a été créé !" });
        } else {
          res.status(400).json({ error: "oops il y a eu une erreur " });
        }
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

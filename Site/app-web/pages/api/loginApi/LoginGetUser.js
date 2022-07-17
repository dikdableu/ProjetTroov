import connectMongo from '../../../utils/connectMongo';
import Login from '../../../models/loginModel';

export default async function getLogin(req, res) {
  try {
    await connectMongo();
    const login = await Login.find(req.query);
    if (login.length > 0){
       res.status(200).json({ success: "l'utilisateur a été trouvé !" });
    } else{
       res.status(400).json({ error: "oops il y a eu une erreur " });
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

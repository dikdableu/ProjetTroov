import connectMongo from '../../../utils/connectMongo';
import Login from '../../../models/loginModel';

export default async function addLogin(req, res) {
  try {
    
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');
    console.log('CREATING DOCUMENT');
    const login = await Login.create(JSON.parse(req.body));
    console.log('CREATED DOCUMENT');
    res.json({ login });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

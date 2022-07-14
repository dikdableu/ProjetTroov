import { Schema, model, models } from 'mongoose';

const loginSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const Login = models.Login || model('Login', loginSchema);

export default Login;
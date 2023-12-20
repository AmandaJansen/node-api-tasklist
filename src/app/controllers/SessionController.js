import User from "../models/User";
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';


class SessionController{
async store(req, res){

  const{ email, password} = req.body;

  //vaerifica se usuario existe
  const user = await User.findOne({where : {email}});

  if(!user){
    return res.status(401).json({error: 'User not found'});
  }

//verificando se senhas são iguais
if(!(await user.checkPassword(password))){

  return res.status(401).json({error: 'Password incorrect'});

}

const { id, name} = user;
  return res.json({
    user:{
      id, name, email
    },
    token: jwt.sign({id}, authConfig.secret,{
      expiresIn: authConfig.expiresIn,
    })

  });
}
}
export default new SessionController();

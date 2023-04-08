// métodos:
/*
index: listagem de sessoes
store: criar uma sessão
show: quando queremos listar uma unica sessao
update: quando queremos alterar alguma sessao
destroy: quando queremos deletar uma sessao
*/

import User from '../models/User';

class SessionController{

  async store(req, res){
    const { email } = req.body;

    let user = await User.findOne({ email }); // verificação procurando algum registtro 

    if(!user){
      user = await User.create({ email }); // se n tiver, criar
    }
    
    return res.json(user);
  }

}

export default new SessionController();
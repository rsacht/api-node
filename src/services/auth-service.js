'use strict';
const hwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY, {expiresIn: '1d'});
}

exports.decodeToken = async(token)=>{
    var data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

exports.authorize = function (req, res, next){
    //Busca o Token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    //Se não encontrou o Token bloqueia o acesso
    if(!token){
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    }else{
        //Existindo o Token, o sistema tentará efetuar a decodificação
        jwt.verify(token, global.SALT_KEY, function(error, decoded){
            //Se não for possível decodificar retorna mensagem de erro
            if(error){
                res.status(401).json({
                    message: 'Token Inválido'
                });
            }else{
                //Se der tudo certo, dá vazão à requisição
                next();
            }
        });
    }
}
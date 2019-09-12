const axios= require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req,res){

        const { username } = req.body;

        //verifica se usuario ja existe
        const userExists = await Dev.findOne({ user: username});

        if(userExists){
            return res.json(userExists);
        }
        //fim da verificação

        
        
        //consumo de api
        const response = await axios.get(`https://api.github.com/users/${username}`);
        //fim consumo



        //filtro de infos
        const { name, bio, avatar_url: avatar } = response.data;
        
        const dev = await Dev.create({
            name,
            user : username,
            bio,
            avatar
        })

        return res.json(dev);
        //fim filtro 

    }
};
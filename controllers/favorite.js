const User = require('../models/user');

module.exports = {
    create,
    deleteFavorite
}

async function create(req, res){
    
    try {
		const favorite = await Favorite.create({
            username: req.user.username, userId: req.user._id
        })
        await favorite.save()
        res.status(201).json({favorite: favorite})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

async function deleteFavorite(req, res){
    try {
        const favorite = await Favorite.findOne({_id: req.params.id, username: req.user.username});
        Favorite.remove(req.params.id)
        await favorite.save()
        res.json({favorite: favorite})
    } catch(err){
        res.status(400).json({err})
    }
}
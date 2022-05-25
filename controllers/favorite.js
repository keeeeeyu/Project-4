const Favorite = require('../models/favorite');

module.exports = {
    create
}

async function create(req, res){
    
    try {
		const favorite = await Favorite.create({username: req.user.username, userId: req.user._id})
        await favorite.save()// save it
        console.log(favorite,"<------ fav")
        res.status(201).json({data: 'favorite added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

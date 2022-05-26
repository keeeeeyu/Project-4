const Favorite = require('../models/favorite');

module.exports = {
    create,
    deleteFavorite
}

async function create(req, res){
    
    try {
		const favorite = await Favorite.create({username: req.user.username, userId: req.user._id})
        await favorite.save()// save it
        console.log(favorite,"<------ fav")
        res.status(201).json({favorite: favorite})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

async function deleteFavorite(req, res){
    try {
        
        const favorite = await Favorite.findOne({_id: req.params.id, username: req.user.username});
        favorite.remove(req.params.id) // mutating a document
		console.log(favorite, " <-= favorite in delete!")
        // req.params.id is the like id 
        await favorite.save() // after you mutate a document you must save
        res.json({data: 'like removed'})
    } catch(err){
        res.status(400).json({err})
    }
}
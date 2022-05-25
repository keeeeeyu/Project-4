const Favorite = require('../models/favorite');

module.exports = {
    create,
    deleteFavorite
}

async function create(req, res){
 
    try {
		// Find a post, so we need the id of the post
        // const post = await Post.findById(req.params.id);
		const favorite = new Favorite.push({username: req.user.username, userId: req.user._id})
        await favorite.save()// save it
        res.status(201).json({data: 'like added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

async function deleteFavorite(req, res){
    try {
        
        const favorite = await Favorite.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        favorite.favorites.remove(req.params.id) // mutating a document
		console.log(favorite, " <-= favorite in delete!")
        // req.params.id is the like id 
        await favorite.save() // after you mutate a document you must save
        res.json({data: 'like removed'})
    } catch(err){
        res.status(400).json({err})
    }
}
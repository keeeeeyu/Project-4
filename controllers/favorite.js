const Favorite = require('../models/favorite');

module.exports = {
    create
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

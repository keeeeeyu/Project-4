const User = require('../models/user');

module.exports = {
    create,
    deleteFavorite
}

async function create(req, res){
    console.log(req.body)
    try {
        
		const user = await User.findById( req.user )
        user.favorites.push(req.body)
        await user.save()
        console.log(user)
        res.status(201).json({user: user})
    } catch(err){
        console.log('catch')
       console.log(err)
        res.status(400).json({err})
    }
    
}

async function deleteFavorite(req, res){
    try {
        const user = await User.findOne(req.user);
        User.remove(req.body)
        await user.save()
        res.json({user: 'delete in ctrl'})
    } catch(err){
        res.status(400).json({err})
    }
}
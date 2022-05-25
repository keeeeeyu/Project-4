const Watch = require('../models/viewWatchList');
const { post } = require('../routes/api/users');

module.exports = {
    create,
    deleteWatch
};


async function create(req, res){
    try{
    Watch.push({username: req.user.username, userId: req.user._id})
    await Watch.save()
    } catch(err){
        res.status(400).json({err})
    }
}


async function deleteWatch(req, res){
    try {
        Watch.remove(req.params.id)
        await post.save()
        res.json({data: 'removed'})
    } catch(err){
        res.status(400).json({err})
    }

}
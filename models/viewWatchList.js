const mongoose = require("mongoose");

const viewWatchListSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
});


module.exports = mongoose.model('ViewWatchList', viewWatchListSchema);
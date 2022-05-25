const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId },
    username: String,
    favoritedCountry: String
    
});


module.exports = mongoose.model('Favorite', favoriteSchema);
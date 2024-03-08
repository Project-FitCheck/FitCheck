const mongoose = require("mongoose");

const Outfit = require("./Outfit");

const LockerSchema = new mongoose.Schema({
    numOutfits: {
        type: Number,
        required: true,
        default: 0
    },
    favOutfits: [Outfit.schema],
    outfits: [Outfit.schema],
    wishlist: [Outfit.schema],
});

const Lockers = mongoose.model('Locker', LockerSchema);
module.exports = Lockers;
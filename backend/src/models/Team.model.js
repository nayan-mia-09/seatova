import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
    teamId : {type: String, unique: true, required: true},
    name: {type: String, unique: true, required: true},
    country: String,
    flag: String,
    group:{
        type: String,
        enum: ['A','B','C','D','E','F','G','H','I','J','K','L'],
        required: true
    },
    qualified: {type: Boolean,default: true},
    coach: String,
    ranking: Number,
    stats: {
        played: Number,
        won: Number,
        drawn: Number,
        lost: Number,
        goalsFor: Number,
        goalsAgainst: Number
    },
     createdAt: {
                type: Date,
                default: Date.now
        }
});

const teamModel = mongoose.model('Teams',teamSchema);

export default teamModel;
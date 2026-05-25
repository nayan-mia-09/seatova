import mongoose, { Schema } from "mongoose";

const matchSchema = new mongoose.Schema({
    matchId: { type: String, unique: true, required: true},
    homeTeam: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
    awayTeam: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
    matchDate: {type: Date , required: true},
    kickOffTime: String,
    status: {type: String, enum: ['scheduled','live','completed','postponed'], default: 'scheduled'},
    venue: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue',required: true},
    competition: {type: String, enum: ['group','round16','quarter','semi','final']},
    homeScore: Number,
    awayScore: Number,
    createdAt:{
        type: Date,
        default: Date.now
    }
   
    
})

const matchModel = mongoose.model('Match', matchSchema);

export default matchModel;
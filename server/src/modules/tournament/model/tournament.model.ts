import * as mongoose from 'mongoose';
export const TournamentSchema = new mongoose.Schema({
    tournamentName: {
        type: String,
        required: true
    },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,ref:'Auth',
        required:true
    },
    teams: [{ 
        type:mongoose.Schema.Types.ObjectId,ref:'Team'
    }],
    rules:[{
        type:String
    }],
    about:{
        type:String,
        required:true
    }},
    {
        timestamps:true
    },
);

export interface Tournament extends mongoose.Document {
    id: string;
    tournamentName: string;
    teams:any[];
    createdBy: string;
    rules:string[];
    about:string

}
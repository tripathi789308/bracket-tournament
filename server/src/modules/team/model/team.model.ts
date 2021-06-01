import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,ref : 'Auth',
    },
    createdAt:{
        type:Date,
        required:true
    },
    tournament:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Tournament',
    }],
    members : [{
        type:mongoose.Schema.Types.ObjectId,ref:'Auth'
    }]},
    {
        timestamps:true
    },
);

export interface Team extends mongoose.Document {
    id: string;
    teamName: string;
    createdBy: string;
    createdAt: Date;
    tournament:any[];
    members:any[];
} 
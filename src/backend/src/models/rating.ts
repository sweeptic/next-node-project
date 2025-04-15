import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RatingSchema = new Schema({
    wins: { type: Number },
    nominations: { type: Number },
    text: { type: String },
});

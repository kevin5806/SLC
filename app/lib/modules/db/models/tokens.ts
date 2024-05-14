import mongoose, { Schema } from "mongoose";

const Tokens_Schema = new Schema({
    token: Object,

    expirationDate: {
        type: Date,
        expires: 864000,
        default: Date.now,
    },
});

const Tokens =
    mongoose.models.Tokens || mongoose.model("Tokens", Tokens_Schema);

export default Tokens;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
        text: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Comment", Comment);
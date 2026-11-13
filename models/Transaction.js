import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, required: true },
    category: {
        type: String,
        enum: ['housing', 'food','salary','business', 'utilities', 'transportation', 'healthcare','other'],
        default: 'other'
    },
    date: Date,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Transaction', transactionSchema)
import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
    market: { type: String, required: true },
    threshold: { type: Number, required: true },
  });
  
  const alertModel = mongoose.model('Alert', alertSchema);
  
export default alertModel;
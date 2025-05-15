import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Reminder from "./models/reminderModel.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Reminder endpoint
app.post("/api/reminders", async (req, res) => {
  try {
    const { date, time, message, reminderType } = req.body;

    if (!date || !time || !message || !reminderType) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const savedReminder = await Reminder.create({ date, time, message, reminderType });

    res.status(201).json({ success: true, data: savedReminder });
  } catch (error) {
    console.error('Error saving reminder:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

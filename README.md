# 🕒 Remind-me-later API

A simple Node.js + MongoDB API to save reminders with a message, date, time, and type (SMS or Email).

> 🚫 This API only stores reminders. It does not send messages.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- ES Modules (`type: "module"`)


## 🔧 sample json (POST)

{
  "date": "2025-05-20",
  "time": "15:30",
  "message": "Doctor appointment at 3:30 PM",
  "reminderType": "email"
}

---

## 📦 Installation

```bash
git clone https://github.com/basitabdullah/reminder-api
cd reminder-api
npm install
npm start


# 🛎️ Reminder API using Node.js + BullMQ + Redis

A simple backend API that lets you schedule reminder messages after a certain delay using **BullMQ** (Redis-based job queue system).

This project is great for learning how messaging queues work in Node.js using Redis.

---

## 🚀 Features

- Queue jobs using **BullMQ**
- Schedule reminders after a delay (even 2 seconds!)
- Job processing with a **Worker**
- Redis-based delayed tasks
- Monitor jobs with **Bull Board**

---

## 🧰 Tech Stack

- Node.js + Express
- BullMQ (built on Redis)
- Redis (via Docker)
- Bull Board (Queue UI Dashboard)

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/reminder-api-bullmq.git
cd reminder-api-bullmq
npm install

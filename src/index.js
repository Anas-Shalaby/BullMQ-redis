const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const { connection } = require("./queue");
const { Queue } = require("bullmq");
const { createBullBoard } = require("@bull-board/api");
const { BullMQAdapter } = require("@bull-board/api/bullMQAdapter");
const { ExpressAdapter } = require("@bull-board/express");

const reminderQueue = new Queue("reminders", { connection });
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");
app.use(express.json());

const { addQueues, removeQueue, setQueues, replaceQueues } = createBullBoard({
  queues: [new BullMQAdapter(reminderQueue)],
  serverAdapter: serverAdapter,
});
app.use("/api/v1/reminders", require("./routes/reminder.route"));
app.use("/admin/queues", serverAdapter.getRouter());
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const Redis = require("ioredis");
const { Worker } = require("bullmq");

const connection = new Redis({ maxRetriesPerRequest: null });

const worker = new Worker(
  "reminders",
  async (job) => {
    console.log(job.data);
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

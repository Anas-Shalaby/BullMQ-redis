const { reminderQueue } = require("../queue");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const { text, delayInSeconds } = req.body;

  if (!text || typeof delayInSeconds !== "number" || delayInSeconds <= 0) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const delay = delayInSeconds * 1000;
  await reminderQueue.add(
    "reminder-job",
    { text },
    {
      delay,
      removeOnComplete: true,
      removeOnFail: true,
    }
  );
  res.status(200).json({ message: "Reminder scheduled" });
});

module.exports = router;

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://<your-mongo-db-connection>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// タスクスキーマの定義
const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Task = mongoose.model("Task", taskSchema);

// タスクの取得
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// タスクの追加
app.post("/tasks", async (req, res) => {
  const newTask = new Task({ title: req.body.title, completed: false });
  await newTask.save();
  res.json(newTask);
});

// タスクの完了マーク
app.patch("/tasks/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

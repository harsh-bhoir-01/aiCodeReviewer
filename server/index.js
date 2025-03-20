import express from "express";
import cors from "cors";
import generateReview from "./review.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/reviews", async (req, res) => {
  const code = req.body.code;

  try {
    const review = await generateReview(code);
    return res.send({
      review,
    });
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

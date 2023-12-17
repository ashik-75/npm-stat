// index.js
import express from "express";

const API_URL = "https://registry.npmjs.org";
const app = express();

app.get("/:package", async (req, res) => {
  try {
    const pkg = req.params.package;
    const response = await fetch(`${API_URL}/${pkg}`).then((dt) => dt.json());

    res.json(response);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

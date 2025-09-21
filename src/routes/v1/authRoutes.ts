import express from "express";
const router = express.Router();
//import auth controller

router.post("/login", (req, res) => {
  res.json({ message: "User logged in" });
});

router.post("/register", (req, res) => {
  res.json({ message: "User registered" });
});

export default router;

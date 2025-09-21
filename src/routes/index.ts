import express from "express";
import authRoutes from "./v1/authRoutes.js";
import { Router } from "express";

const router: Router = express.Router();

router.use("/v1/auth", authRoutes);

export default router;

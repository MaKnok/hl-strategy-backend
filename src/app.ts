import express from "express";
import type { Application } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";

import { createClient } from "redis";
import { RedisStore } from "connect-redis";

import routes from "./routes/index.js";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dotenv from "dotenv";
const config = dotenv.config();

const redisClient = createClient();

declare module "express-session" {
  interface SessionData {
    viewCount?: number;
  }
}

try {
  await redisClient.connect();
} catch (err) {
  console.error("Could not connect to Redis", err);
  process.exit(1);
}

const store = new RedisStore({
  client: redisClient,
});

const app: Application = express();

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET environment variable is required");
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

const sessionConfig = {
  store,
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 1000 * 60 * 10, // 10 minutes
  },
};

app.use(session(sessionConfig));

app.use("/api", routes);

app.use("/hello", (req, res) => {
  if (req.session.viewCount === undefined) {
    req.session.viewCount = 0;
  } else {
    req.session.viewCount++;
  }
  res.json({
    viewCount: "View count is: " + req.session.viewCount,
  });
});

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

export default app;

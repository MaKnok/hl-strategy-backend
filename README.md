Wellness Engagement Platform – Backend

This repository contains the backend service for the Wellness Engagement Platform, a system that empowers administrators to create and configure their own dashboards. The platform is designed for two primary use cases:

Wellness Foundations – measuring donor engagement and impact.

Corporate HR Departments – measuring employee engagement and wellness participation.

All insights and metrics are powered by AI-driven data ingestion and analysis, enabling organizations to make data-informed decisions that foster stronger engagement and community well-being.

✨ Features

Admin Signup & Authentication
Secure onboarding for administrators with cookie-based session management.

Dashboard Configuration
Admins can configure dashboards tailored to their context:

Wellness foundations → donor engagement.

HR departments → employee engagement.

AI-Powered Data Processing
Incoming data streams are enriched and analyzed by AI models to provide actionable insights.

Customizable Branding & Layout
Each organization can apply its own look and feel to the dashboard.

Engagement Metrics & Analytics
Measure participation trends, engagement levels, and patterns over time.

🛠 Tech Stack

Node.js + Express → REST API backend

PostgreSQL → relational database for structured storage (via an ORM like Sequelize/Prisma/TypeORM)

Express-session + cookies → session-based authentication

AI Integration Layer → processes incoming data and generates insights

🚀 Getting Started
Prerequisites

Node.js (v18+)

PostgreSQL (local or cloud)

npm or yarn

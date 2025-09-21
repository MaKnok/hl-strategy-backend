import type { Application } from "express";
declare module "express-session" {
    interface SessionData {
        viewCount?: number;
    }
}
declare const app: Application;
export default app;
//# sourceMappingURL=app.d.ts.map
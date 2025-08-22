import { procedure, router } from "@/lib/trpc/server";

export const appRouter = router({
  // Health check endpoint
  health: procedure.query(() => {
    return { status: "ok", timestamp: new Date().toISOString() };
  }),
});

export type AppRouter = typeof appRouter;

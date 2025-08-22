import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "@/server/routers/_app";
import superjson from "superjson";

function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  return `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}`; // dev SSR should use localhost
}

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson,
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          // authorization: getAuthCookie(),
        };
      },
    }),
  ],
});

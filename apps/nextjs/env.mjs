import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SITE_URL: z.string(),
    NEXT_PUBLIC_DIRECTUS_ASSET_URL: z.string(),
    NEXT_PUBLIC_ENABLE_VISUAL_EDITING: z.string(),
    NEXT_PUBLIC_DIRECTUS_URL: z.string(),
  },
  server: {
    AUTH_SECRET: z.string(),
    AUTH_URL: z.string(),
    AUTH_TRUST_HOST: z.string().optional(),
    DIRECTUS_PUBLIC_TOKEN: z.string(),
    DIRECTUS_FORM_TOKEN: z.string(),
    DRAFT_MODE_SECRET: z.string().optional(),
    BUNDLE_ANALYZER_ENABLED: z.string().optional(),
  },
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_URL: process.env.AUTH_URL,
    AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST,

    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ENABLE_VISUAL_EDITING: process.env.NEXT_PUBLIC_ENABLE_VISUAL_EDITING,
    NEXT_PUBLIC_DIRECTUS_ASSET_URL: process.env.NEXT_PUBLIC_DIRECTUS_ASSET_URL,

    NEXT_PUBLIC_DIRECTUS_URL: process.env.NEXT_PUBLIC_DIRECTUS_URL,
    DIRECTUS_PUBLIC_TOKEN: process.env.DIRECTUS_PUBLIC_TOKEN,
    DIRECTUS_FORM_TOKEN: process.env.DIRECTUS_FORM_TOKEN,
    DRAFT_MODE_SECRET: process.env.DRAFT_MODE_SECRET,
    BUNDLE_ANALYZER_ENABLED: process.env.BUNDLE_ANALYZER_ENABLED=true
    
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});

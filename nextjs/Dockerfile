# ใช้ Node.js 20 Alpine image เพื่อความเบา
FROM node:20-alpine AS base

# ติดตั้ง dependencies ที่จำเป็นสำหรับ Alpine
RUN apk add git --no-cache \
    && apk add --no-cache libc6-compat \
    && npm install -g corepack@0.31.0 \
    && corepack enable pnpm \
    && corepack prepare pnpm@10.8.0 --activate
WORKDIR /app

# ติดตั้ง dependencies
FROM base AS deps
WORKDIR /app

# Copy package files only
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# สร้าง production build
FROM base AS builder
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all source code and config files
COPY . .

# Build the application (skip ESLint for Docker build)
ENV NEXT_LINT=false
RUN pnpm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1


# สร้าง user ที่ไม่ใช่ root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# เซ็ตสิทธิ์ที่ถูกต้อง
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy production files และเซ็ตสิทธิ์
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["pnpm", "start"]

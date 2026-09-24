# syntax=docker/dockerfile:1

# ---- Build: install dependencies and generate the static site ---------------
FROM node:24-alpine AS build
WORKDIR /app
ENV ASTRO_TELEMETRY_DISABLED=1

# Dependencies first, so this layer stays cached until the lockfile changes.
# Dev dependencies (type checking) are not needed to build.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund

# Only what the build reads.
COPY astro.config.mjs tsconfig.json ./
COPY public ./public
COPY src ./src

# Optional public address for canonical links, the sitemap and social previews
# (e.g. https://<app-name>.cubicle.shagato.space). Empty keeps src/config/site.ts.
ARG SITE_URL=""
RUN npm run build

# ---- Run: serve the static files with nginx as a non-root user --------------
FROM nginxinc/nginx-unprivileged:1.30-alpine

# Cubicle sets PORT to the exposed port; the default keeps `docker run` working.
# Only ${PORT} is substituted into the nginx template.
ENV PORT=8080 \
    NGINX_ENVSUBST_FILTER=^PORT$

COPY docker/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

# The base image's entrypoint renders the template, then execs nginx as PID 1.
CMD ["nginx", "-g", "daemon off;"]

# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and build the extension
COPY . .
RUN npm run build

# Production Stage
FROM directus/directus:11.14.0

# Chuyển sang quyền root để thao tác file hệ thống
USER root

# Tạo thư mục extension (nếu chưa có)
RUN mkdir -p /directus/extensions/directus-extension-module

# Copy từ stage build và set quyền cho user có ID 1000 (mặc định của Directus/Node)
COPY --from=build --chown=1000:1000 /app/dist /directus/extensions/directus-extension-module/dist
COPY --from=build --chown=1000:1000 /app/package.json /directus/extensions/directus-extension-module/package.json

# Cấu hình cổng cho Hugging Face (Quan trọng)
ENV PORT=7860
EXPOSE 7860


# Phân quyền cho toàn bộ thư mục extensions
RUN chown -R 1000:1000 /directus/extensions/directus-extension-module

# Quay lại user mặc định của image (ID 1000)
USER 1000

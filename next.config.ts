import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // vercel 이미지 최적화 비활성화
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins:["http://172.16.0.2:3000"  , "http://192.168.1.69:3000"]
  /* config options here */
};

export default nextConfig;

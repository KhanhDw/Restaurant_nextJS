import axios from 'axios';
import https from 'https';
import envConfig from "@/config/envConfig"

// const isServer = typeof window === 'undefined';

const server = envConfig.NEXT_PUBLIC_SERVER_ADDRESS;
export const axiosInstance = axios.create({
  baseURL: server,
  timeout: 10000,
});

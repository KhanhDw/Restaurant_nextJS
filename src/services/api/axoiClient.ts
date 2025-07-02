import axios from 'axios';
import https from 'https';
import fs from 'fs';
import path from 'path';
import serverAddress from '../serverAddress';

// Truy cập cert từ root dự án (dù đang ở src/ sâu trong)
const certPath = path.resolve(process.cwd(), 'cert', 'cert.pem');
const keyPath = path.resolve(process.cwd(), 'cert', 'key.pem');


const server = serverAddress();
export const axiosInstance = axios.create({
  baseURL: server,
  httpsAgent: new https.Agent({
    ca: fs.readFileSync(certPath),
    rejectUnauthorized: false, // vẫn an toàn vì tin đúng cert
  }),
  timeout: 6000,
});

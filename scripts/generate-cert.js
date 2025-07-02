import fs from 'fs';
import path from 'path';
import forge from 'node-forge';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Tạo keypair và cert
const pki = forge.pki;
const keys = pki.rsa.generateKeyPair(2048);
const cert = pki.createCertificate();

cert.publicKey = keys.publicKey;
cert.serialNumber = '01';
cert.validity.notBefore = new Date();
cert.validity.notAfter = new Date();
cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);

// Cấu hình thông tin chứng chỉ
const attrs = [
  { name: 'commonName', value: 'localhost' },
  { name: 'organizationName', value: 'Dev Server' },
  { shortName: 'OU', value: 'Dev' },
];
cert.setSubject(attrs);
cert.setIssuer(attrs);
cert.setExtensions([
  {
    name: 'subjectAltName',
    altNames: [
      { type: 2, value: 'localhost' },
      { type: 7, ip: '127.0.0.1' }
    ]
  }
]);

cert.sign(keys.privateKey, forge.md.sha256.create());

// Ghi ra file
const certDir = path.resolve(__dirname, '../cert');
if (!fs.existsSync(certDir)) fs.mkdirSync(certDir);

fs.writeFileSync(path.join(certDir, 'cert.pem'), pki.certificateToPem(cert));
fs.writeFileSync(path.join(certDir, 'key.pem'), pki.privateKeyToPem(keys.privateKey));

console.log('✅ Đã tạo cert và key tại thư mục /cert');

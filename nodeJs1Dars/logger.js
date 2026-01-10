import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, 'logs.txt');

export function log(message) {
  const time = new Date().toISOString();
  const logLine = `${time} - ${message}\n`;

  fs.appendFile(logFilePath, logLine, (err) => {
    if (err) {
      console.error('Log yozishda xatolik:', err.message);
    }
  });
}

export function readLogs() {
  try {
    const data = fs.readFileSync(logFilePath, 'utf-8');
    return data;
  } catch (err) {
    console.error('Loglarni o‘qishda xatolik:', err.message);
    return '';
  }
}

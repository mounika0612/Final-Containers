import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 10 }, // Light Load
    { duration: '1m', target: 50 }, // Medium Load
    { duration: '1m', target: 100 }, // Heavy Load
  ],
};

export default function () {
  const url = 'http://localhost:8080'; // Update to your endpoint
  const res = http.get(url);

  if (res.status !== 200) {
    console.error(`Request failed with status: ${res.status}`);
  }
  sleep(1);
}

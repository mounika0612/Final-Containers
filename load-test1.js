import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '3m', target: 10 }, // Light Load
    { duration: '3m', target: 50 }, // Medium Load
    { duration: '4m', target: 200 }, // Heavy Load
  ],
};

export default function () {
  const url = 'http://localhost:8080'; // Frontend service endpoint
  const res = http.get(url);

  if (res.status !== 200) {
    console.error(`Request failed with status: ${res.status}`);
  }
  sleep(1);
}

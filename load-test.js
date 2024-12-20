import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 50 },   // Ramp up to 50 VUs in 2 minutes
    { duration: '3m', target: 200 },  // Ramp up to 200 VUs in 3 minutes
    { duration: '5m', target: 200 },  // Stay at 200 VUs for 5 minutes
    { duration: '2m', target: 0 },    // Ramp down to 0 VUs
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should respond within 500ms
    http_req_failed: ['rate<0.01'],   // Error rate should be below 1%
  },
};

export default function () {
  let res = http.get('http://localhost:8080'); // Frontend Service URL
  sleep(1); // Simulate user wait time
}

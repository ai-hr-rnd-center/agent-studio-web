import axios from 'axios';

// API 클라이언트 생성
export const apiClient = axios.create({
 baseURL: import.meta.env.VITE_API_BASE_URL + '/api/v1',
 timeout: 10000,
 headers: {
   'Content-Type': 'application/json',
   'ngrok-skip-browser-warning': 'true',
 },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
 (config) => {
   // 요청 전 처리 (로깅, 토큰 추가 등)
   console.log('API Request:', config);
   return config;
 },
 (error) => {
   return Promise.reject(error);
 }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
 (response) => {
   // 응답 성공 처리
   return response;
 },
 (error) => {
   // 응답 에러 처리
   console.error('API Error:', error);
   return Promise.reject(error);
 }
);
// src/api.ts
const BASE_URL = 'http://192.168.x.x:3000'; // バックエンドサーバーのアドレス

export const fetchGreeting = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/greet`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// src/api.ts
const BASE_URL = 'http://192.168.11.60:3000'; // バックエンドサーバーのアドレス

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

export const fetchUsers = async () => {
  try {
    console.log('in');
    const response = await fetch(`${BASE_URL}/api/users`);
    // console.log('2', response.json());
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

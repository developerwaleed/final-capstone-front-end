import { createAsyncThunk } from '@reduxjs/toolkit';

export const createUser = createAsyncThunk(
  'currentUser/CREATE_USER',
  async (user) => {
    const response = await fetch('http://127.0.0.1:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.status['0']?.errors) {
      return {};
    }

    return data.status.data;
  },
);

export const getCurrentUser = createAsyncThunk(
  'currentUser/GET_CURRENT_USER',
  async (user) => {
    const response = await fetch('http://127.0.0.1:3001/users/sign_in', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return { user: data.status.data, errors: null };
    }
    return { user: null, errors: 'Email or password is incorrect' };
  },
);

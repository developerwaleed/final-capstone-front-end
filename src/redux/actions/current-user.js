import { createAsyncThunk } from '@reduxjs/toolkit';
import API_ROUTE from '../../config/api-route';

export const createUser = createAsyncThunk(
  'currentUser/CREATE_USER',
  async (user) => {
    const response = await fetch(`${API_ROUTE}/users`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (data.status['0']?.errors) {
      return { user: null, errors: data.status['0']?.errors[0] };
    }

    return { user: { ...data.status.data, password: user.password }, errors: '' };
  },
);

export const getCurrentUser = createAsyncThunk(
  'currentUser/GET_CURRENT_USER',
  async (user = null) => {
    const response = await fetch(`${API_ROUTE}/users/sign_in`, {
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

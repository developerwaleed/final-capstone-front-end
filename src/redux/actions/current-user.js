import { createAsyncThunk } from '@reduxjs/toolkit';

// const createUser = createAsyncThunk(
//   'currentUser/GET_CURRENT_USER',
//   async (user) => {
//     const response = await fetch('http://127.0.0.1:3001/users', {
//       method: 'POST',
//       body: JSON.stringify(user)
//     })

//     const data = await response.json();

//     return data;
//   }
// )

const getCurrentUser = createAsyncThunk(
  'currentUser/GET_CURRENT_USER',
  async (user) => {
    const response = await fetch('http://127.0.0.1:3001/users/sign_in', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);
    const data = await response.json();

    console.log(data);

    return data;
  },
);

export default getCurrentUser;

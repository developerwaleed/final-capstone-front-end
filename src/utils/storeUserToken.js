const STORE_KEY = 'user_token';

const storeToken = (userToken) => {
  localStorage.setItem(STORE_KEY, JSON.stringify(userToken));
};

const tokenExistsInStorage = () => !!localStorage.getItem(STORE_KEY);

const getTokenFromStorage = () => {
  const token = localStorage.getItem(STORE_KEY);
  return JSON.parse(token);
};

const clearTokenFromStorage = () => {
  localStorage.removeItem(STORE_KEY);
};

export {
  storeToken, tokenExistsInStorage, getTokenFromStorage, clearTokenFromStorage,
};

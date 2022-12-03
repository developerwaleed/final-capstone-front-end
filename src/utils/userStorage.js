const STORE_KEY = 'fitness_app_user';

const storeUser = (user) => {
  localStorage.setItem(STORE_KEY, JSON.stringify(user));
};

const userExistsInStorage = () => !!localStorage.getItem(STORE_KEY);

const getUserFromStrorage = () => {
  const user = localStorage.getItem(STORE_KEY);
  return JSON.parse(user);
};

const clearUserFromStorage = () => {
  localStorage.removeItem(STORE_KEY);
};

export {
  storeUser, userExistsInStorage, getUserFromStrorage, clearUserFromStorage,
};

import store from '../redux/configureStore';
import { clearUserSession, restoreUserSession } from '../redux/current-user_slice';
import { clearUserToken } from '../redux/jwt-token_slice';
import { clearTokenFromStorage } from './storeUserToken';
import { clearUserFromStorage, getUserFromStrorage, userExistsInStorage } from './userStorage';

const confirmUserSession = () => {
  if (!userExistsInStorage) return;

  const storedUser = getUserFromStrorage();
  store.dispatch(restoreUserSession(storedUser));
};

export const signOut = () => {
  clearUserFromStorage();
  clearTokenFromStorage();
  store.dispatch(clearUserSession());
  store.dispatch(clearUserToken());
};

export default confirmUserSession;

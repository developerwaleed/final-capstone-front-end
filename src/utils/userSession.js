import store from '../redux/configureStore';
import { clearUserSession, restoreUserSession } from '../redux/current-user_slice';
import { clearUserFromStorage, getUserFromStrorage, userExistsInStorage } from './userStorage';

const confirmUserSession = () => {
  if (!userExistsInStorage) return;

  const storedUser = getUserFromStrorage();
  store.dispatch(restoreUserSession(storedUser));
};

export const signOut = () => {
  clearUserFromStorage();
  store.dispatch(clearUserSession());
};

export default confirmUserSession;

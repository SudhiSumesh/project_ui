import { logout } from "../Login/login.reducer";

const tokenExpirationMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "auth/tokenExpired") {
      dispatch(logout());
    }
    return next(action);
  };

export default tokenExpirationMiddleware;

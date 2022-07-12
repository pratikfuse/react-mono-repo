import { RootState } from "src/Common/redux/store";

export const isLoggedInSelector = (state: RootState) => state.Auth.isLoggedIn;

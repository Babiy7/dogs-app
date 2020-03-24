import { WHITE_THEME } from "../actionTypes";

const initState = {
  theme: "dark"
};

const whiteTheme = payload => {
  return { theme: payload };
};

const darkTheme = payload => {
  return { theme: payload };
};

export function themeReducer(state = initState, action) {
  console.log(action);
  if (action.type === WHITE_THEME) {
    return whiteTheme("white");
  } else {
    return darkTheme("dark");
  }
}

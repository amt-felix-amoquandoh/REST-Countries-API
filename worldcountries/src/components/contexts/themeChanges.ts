import { type } from "os";
import { createContext, useContext, useReducer } from "react";
interface state {
  theme: string;
}

interface actions {
  type: themeActions;
  payload: any;
}

const initialData = {
  theme: "dark",
};

interface ContextType {
  state: State;
  dispatch: (action: Actions) => void;
}

const ThemeContext = createContext(undefined);

export enum themeActions {
  setTheme,
}

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case themeActions.setTheme:
      return { ...state, theme: action.payload };
      break;
  }
};

export const ThemeProvider = ({ children }: Provider) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const value = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

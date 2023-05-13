import { createContext, useContext, useReducer } from "react";

interface State {
  theme: string;
}

interface Action {
  type: themeActions;
  payload: any;
}

const initialData: State = {
  theme: "dark",
};

interface ContextType {
  state: State;
  dispatch: (action: Action) => void;
}

const ThemeContext = createContext<ContextType | undefined>(undefined);

export enum themeActions {
  setTheme,
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case themeActions.setTheme:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

interface Provider {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Provider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const value = { state, dispatch };

  return (
    <ThemeContext.Provider {value={value}}>{children}</ThemeContext.Provider>
  );
};

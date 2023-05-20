import { createContext, useContext, useReducer, ReactNode } from "react";

interface State {
  theme: string;
}

interface Actions {
  type: themeActions;
  payload: any;
}

interface ProviderProps {
  children: ReactNode;
}

const initialData: State = {
  theme: "dark",
};

interface ContextType {
  state: State;
  dispatch: (action: Actions) => void;
}

const ThemeContext = createContext<ContextType | undefined>(undefined);

export enum themeActions {
  setTheme,
}

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case themeActions.setTheme:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const value: ContextType = { state, dispatch };

  return (
    <ThemeContext.Provider> value={value}>{children}</ThemeContext.Provider>
  )
};

export const useForm = () => {
  const context = useContext(ThemeContext)
  if(context === undefined){
    throw new Error("UserForm needs to be used inside Theme provider")
  }
  return context
}
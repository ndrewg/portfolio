import { createContext, useReducer } from 'react';

interface IAnimateContext {
  shouldAnimate: boolean;
  setShouldAnimate: (bool: boolean) => void;
  activeLink: string;
  setActiveLink: (link: string) => void;
}

export const AnimateContext = createContext<IAnimateContext>({
  shouldAnimate: false,
  setShouldAnimate: () => {},
  activeLink: '',
  setActiveLink: () => {},
});

type AnimateState = {
  shouldAnimate: boolean;
  activeLink: string;
};

const INITIAL_STATE: AnimateState = {
  shouldAnimate: false,
  activeLink: '',
};

enum ActionTypes {
  SET_SHOULD_ANIMATE = 'SET_SHOULD_ANIMATE',
  SET_ACTIVE_LINK = 'SET_ACTIVE_LINK',
}

type Action =
  | { type: ActionTypes.SET_SHOULD_ANIMATE; payload: boolean }
  | { type: ActionTypes.SET_ACTIVE_LINK; payload: string };

const animateReducer = (state: AnimateState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_SHOULD_ANIMATE:
      return {
        ...state,
        shouldAnimate: payload,
      };
    case ActionTypes.SET_ACTIVE_LINK:
      return {
        ...state,
        activeLink: payload,
      };
    default:
      return state;
  }
};

interface IAnimateProviderProps {
  children: JSX.Element;
}

export const AnimateProvider = ({ children }: IAnimateProviderProps) => {
  const [state, dispatch] = useReducer(animateReducer, INITIAL_STATE);
  const { shouldAnimate, activeLink } = state;

  const setShouldAnimate = (bool: boolean) => {
    dispatch({
      type: ActionTypes.SET_SHOULD_ANIMATE,
      payload: bool,
    });
  };

  const setActiveLink = (link: string) => {
    dispatch({
      type: ActionTypes.SET_ACTIVE_LINK,
      payload: link,
    });
  };

  const value = {
    shouldAnimate,
    setShouldAnimate,
    activeLink,
    setActiveLink,
  };

  return (
    <AnimateContext.Provider value={value}>{children}</AnimateContext.Provider>
  );
};

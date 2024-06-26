import { createContext, useReducer } from 'react';

interface IAnimateContext {
  shouldAnimate: boolean;
  setShouldAnimate: (bool: boolean) => void;
}

export const AnimateContext = createContext<IAnimateContext>({
  shouldAnimate: false,
  setShouldAnimate: () => {},
});

type AnimateState = {
  shouldAnimate: boolean;
};

const INITIAL_STATE: AnimateState = {
  shouldAnimate: false,
};

enum ActionTypes {
  SET_SHOULD_ANIMATE = 'SET_SHOULD_ANIMATE',
}

type Action = { type: ActionTypes.SET_SHOULD_ANIMATE; payload: boolean };

const animateReducer = (state: AnimateState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_SHOULD_ANIMATE:
      return {
        ...state,
        shouldAnimate: payload,
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
  const { shouldAnimate } = state;

  const setShouldAnimate = (bool: boolean) => {
    dispatch({
      type: ActionTypes.SET_SHOULD_ANIMATE,
      payload: bool,
    });
  };

  const value = {
    shouldAnimate,
    setShouldAnimate,
  };

  return (
    <AnimateContext.Provider value={value}>{children}</AnimateContext.Provider>
  );
};

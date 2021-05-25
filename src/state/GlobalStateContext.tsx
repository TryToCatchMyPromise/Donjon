import {createContext, Dispatch, FC, useReducer} from 'react';

import {GlobalState, initialState} from './GlobalState';
import {Action} from './GlobalStateAction';
import {globalStateReducer} from './globalStateReducer';

interface IGlobalStateContext {
  state: GlobalState;
  dispatch: Dispatch<Action>;
}

export const globalStateContext = createContext<IGlobalStateContext>({
  state: initialState,
  dispatch: () => null
});

const {Provider} = globalStateContext;

export const GlobalStateContext: FC = ({children}) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

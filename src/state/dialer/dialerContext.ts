import {createContext} from 'react';

import {IGlobalStateContext} from '../IGlobalStateContext';
import {DialerAction} from './DialerAction';
import {IDialerState, initialDialerState} from './IDialerState';

export const dialerContext = createContext<IGlobalStateContext<IDialerState, DialerAction>>({
  state: initialDialerState,
  dispatch: () => null
});

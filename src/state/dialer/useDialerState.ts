import {useCallback, useContext} from 'react';
import {ICall} from 'src/api/generated/talk';

import {globalStateContext} from '../GlobalStateContext';
import {IDialerState} from './IDialerState';

export const useDialerState = () => {
  const {
    state: {dialer: state},
    dispatch
  } = useContext(globalStateContext);

  const updateDialerState = useCallback(
    (nextState: Partial<IDialerState>) => {
      dispatch({name: 'UPDATE_DIALER_STATE', dialerState: nextState});
    },
    [dispatch]
  );

  const startCall = useCallback(
    (toPhoneNumber: string) => {
      dispatch({name: 'START_CALL', toPhoneNumber});
    },
    [dispatch]
  );

  const updateActiveCall = useCallback(
    (call: ICall) => {
      dispatch({name: 'UPDATE_ACTIVE_CALL', call});
    },
    [dispatch]
  );

  return {state, updateDialerState, startCall, updateActiveCall};
};

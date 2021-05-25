import {Reducer} from 'react';

import {never} from '@inperium-corp/core';
import {IDialerState} from './IDialerState';
import {DialerAction} from './DialerAction';

export const dialerReducer: Reducer<IDialerState, DialerAction> = (state, action) => {
  switch (action.name) {
    case 'UPDATE_DIALER_STATE':
      return {
        ...state,
        ...action.dialerState
      };

    case 'START_CALL':
      return {
        ...state,
        isOnCall: true,
        isMuted: false,
        isOnHold: false,
        toPhoneNumber: action.toPhoneNumber,
        callStartDate: new Date()
      };

    case 'UPDATE_ACTIVE_CALL':
      return {
        ...state,
        activeCall: action.call
      };

    default:
      never(action);
  }
  return state;
};

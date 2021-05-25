import {IAlertState, initialAlertState} from './alert/IAlertState';
import {IDialerState, initialDialerState} from './dialer/IDialerState';

export type GlobalState = {
  alert: IAlertState;
  dialer: IDialerState;
};

export const initialState: GlobalState = {
  alert: {...initialAlertState},
  dialer: {...initialDialerState}
};

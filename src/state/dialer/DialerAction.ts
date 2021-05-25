import {ICall} from 'src/api/generated/talk';

import {IDialerState} from './IDialerState';

export type UpdateDialer = {
  name: 'UPDATE_DIALER_STATE';
  dialerState: Partial<IDialerState>;
};

export type StartCall = {
  name: 'START_CALL';
  toPhoneNumber: string;
};

export type UpdateActiveCall = {
  name: 'UPDATE_ACTIVE_CALL';
  call: ICall;
};

export type DialerAction = StartCall | UpdateActiveCall | UpdateDialer;

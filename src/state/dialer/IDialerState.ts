import {ICall, IContact, IPhoneNumber} from 'src/api/generated/talk';
import {CallOperation} from 'src/core/types/CallOperation';
import {CallTransferType} from 'src/core/types/CallTransferType';
import {KeypadType} from 'src/core/types/KeypadType';

export interface IDialerState {
  isOnCall: boolean;
  isMuted: boolean;
  isRinging: boolean;
  callStartDate?: Date;
  fromPhoneNumber?: IPhoneNumber;
  fromContact?: IContact;
  toPhoneNumber: string;
  activeCall?: ICall;
  isOnHold: boolean;
  activeCallOperation: CallOperation;
  activeCallTransferType: CallTransferType;
  keypadType: KeypadType;
}

export const initialDialerState: IDialerState = {
  isMuted: false,
  isOnCall: false,
  isOnHold: false,
  isRinging: false,
  activeCallOperation: undefined,
  activeCallTransferType: undefined,
  callStartDate: undefined,
  activeCall: undefined,
  toPhoneNumber: '',
  keypadType: 'numpad'
};

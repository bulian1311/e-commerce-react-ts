import { AnyAction, ActionCreator } from 'redux';
import { UserType } from '../../utils/types';
import userActionTypes from './userActionTypes';

export const googleSignInStart: ActionCreator<AnyAction> = (): AnyAction => {
  return {
    type: userActionTypes.GOOGLE_SIGN_IN_START
  }
}

export const emailSignInStart: ActionCreator<AnyAction> = (
  emailAndPassword: { email: string, password: string }
): AnyAction => {
  return {
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  }
}

export const signInSuccess: ActionCreator<AnyAction> = (user: UserType): AnyAction => {
  return {
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
  }
}

export const signInFailure: ActionCreator<AnyAction> = (errorMessage: string): AnyAction => {
  return {
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: errorMessage
  }
}

export const checkUserSession: ActionCreator<AnyAction> = (): AnyAction => ({
  type: userActionTypes.CHECK_USER_SESSION
});

export const signOutStart: ActionCreator<AnyAction> = (): AnyAction => ({
  type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess: ActionCreator<AnyAction> = (): AnyAction => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure: ActionCreator<AnyAction> = (errMessage: string): AnyAction => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: errMessage
});

export const signUpStart: ActionCreator<AnyAction> = (userCredentials: any): AnyAction => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess: ActionCreator<AnyAction> = ({ user, aditionalData }: any): AnyAction => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: { user, aditionalData }
});

export const signUpFailure: ActionCreator<AnyAction> = (errMessage: string): AnyAction => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: errMessage
});
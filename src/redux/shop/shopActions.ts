import { AnyAction, ActionCreator } from 'redux';
import shopActionType from './shopActionTypes';

export const updateCollections: ActionCreator<AnyAction> = (collectionsMap: any): AnyAction => {
  return {
    type: shopActionType.UPDATE_COLLECTIONS,
    payload: collectionsMap
  }
}
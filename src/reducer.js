import { OPEN_MODAL, CLOSE_MODAL, CLOSE_TOP_MODAL } from './actionTypes';

const initialState = [];

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return state.concat(payload);
    case CLOSE_MODAL:
      return state.filter(dialog => dialog.modalId !== payload.modalId);
    case CLOSE_TOP_MODAL:
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
}

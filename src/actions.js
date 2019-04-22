import { OPEN_MODAL, CLOSE_MODAL, CLOSE_TOP_MODAL } from './actionTypes';

let modalId = 0;

export const openModal = (type, props) => ({
  type: OPEN_MODAL,
  payload: {
    type,
    modalId: ++modalId,
    props,
  },
});

export const closeModal = (modalId, result) => ({
  type: CLOSE_MODAL,
  payload: {
    modalId,
    result,
  },
});

export const closeTopModal = () => ({
  type: CLOSE_TOP_MODAL,
  payload: {},
});

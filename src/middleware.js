import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

const promises = new Map();

export default () => next => action => {
  const { type, payload } = action;

  const result = next(action);

  if (type === OPEN_MODAL) {
    const modalId = payload.modalId;

    if (!modalId) {
      throw new Error('Trying to open modal without modalId');
    }

    const promise = new Promise(resolve => {
      promises.set(modalId, {
        modalId,
        resolve,
      });
    });

    promise.modalId = modalId;

    return promise;
  }

  if (type === CLOSE_MODAL) {
    if (!payload.modalId) {
      throw new Error('Trying to hide modal without modalId');
    }

    const dialogInfo = promises.get(payload.modalId);

    if (dialogInfo) {
      dialogInfo.resolve(payload.result);
      promises.delete(payload.modalId);
    }
  }

  return result;
};

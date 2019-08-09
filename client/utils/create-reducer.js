const createReducer = (initial, handlers) => (state = initial, action = {}) => {
  const { type, payload = {} } = action;

  if (Object.prototype.hasOwnProperty.call(handlers, type)) {
    return handlers[type](state, payload);
  }

  return state;
};

export default createReducer;

// action types
export const CHANGE_DEVICE_STATE = 'CHANGE_DEVICE_STATE';

// action creators
export function changeDeviceState(name, state, timestamp) {
  return {
    type: CHANGE_DEVICE_STATE,
    name,
    state,
    timestamp
  };
}

import { CHANGE_DEVICE_STATE } from '../Actions';

const initialState = {
  unit: 'Apartment 143',
  deviceIds: ['apt-143-lock', 'apt-143-switch', 'apt-143-thermostat'],
  devices: {
    'apt-143-lock': {
      name: 'Door Lock',
      type: 'lock',
      state: 'locked',
      last_updated_at: 1508386138,
      slug: 'apt-143-lock'
    },
    'apt-143-switch': {
      name: 'Light Switch',
      type: 'switch',
      state: 'unknown',
      last_updated_at: -1,
      slug: 'apt-143-switch'
    },
    'apt-143-thermostat': {
      name: 'Thermostat',
      type: 'thermostat',
      state: 'unknown',
      last_updated_at: -1,
      slug: 'apt-143-thermostat'
    }
  }
};

export default function home(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DEVICE_STATE:
      // make sure we have the specified device first
      if (state.devices && state.devices[action.name]) {
        return {
          ...state,
          devices: {
            ...state.devices,
            [action.name]: {
              ...state.devices[action.name],
              state: action.state,
              last_updated_at: action.timestamp
            }
          }
        };
      }
    default:
      return state;
  }
}

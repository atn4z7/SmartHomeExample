import { CHANGE_DEVICE_STATE } from '../Actions';

const initialState = {
  'apt-143-lock': [
    {
      state: 'locked',
      timestamp: 1508386138
    }
  ]
};

export default function history(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DEVICE_STATE:
      // make sure we have the specified device first
      if (state[action.name]) {
        // if array has 10 items already
        // then delete the earliest item (first item in this case) before pushing the new item
        if (state[action.name].length === 10) {
          return {
            ...state,
            [action.name]: [
              ...state[action.name].slice(1),
              {
                state: action.state,
                timestamp: action.timestamp
              }
            ]
          };
        }

        // else just push the new item
        return {
          ...state,
          [action.name]: [
            ...state[action.name],
            {
              state: action.state,
              timestamp: action.timestamp
            }
          ]
        };
      }

    default:
      return state;
  }
}

import { CHANGE_DEVICE_STATE } from "../app/store/Actions";
import history from "../app/store/reducer/history";

const initialState = {
  "apt-143-lock": [
    {
      state: "locked",
      timestamp: 1508386138
    }
  ]
};

describe("preconditions", () => {
  it("should return correct initial state", () => {
    expect(history(undefined, {})).toEqual(initialState);
  });
});

describe("CHANGE_DEVICE_STATE", () => {
  it("should add new entry when device exists", () => {
    const testAction = {
      type: CHANGE_DEVICE_STATE,
      name: "apt-143-lock",
      state: "unlocked",
      timestamp: 12345
    };

    const expectedState = {
      "apt-143-lock": [
        {
          state: "locked",
          timestamp: 1508386138
        },
        {
          state: "unlocked",
          timestamp: 12345
        }
      ]
    };

    expect(history(initialState, testAction)).toEqual(expectedState);
  });

  it("should not add anything when device doesn't exist", () => {
    const testAction = {
      type: CHANGE_DEVICE_STATE,
      name: "apt-1433-lock",
      state: "unlocked",
      timestamp: 12345
    };

    expect(history(initialState, testAction)).toEqual(initialState);
    expect(history({}, testAction)).toEqual({});
  });

  it("should remove first entry and add new entry when there are already 10 entries", () => {
    const testAction = {
      type: CHANGE_DEVICE_STATE,
      name: "apt-143-lock",
      state: "locked",
      timestamp: 11
    };

    const testState = {
      "apt-143-lock": [
        {
          state: "locked",
          timestamp: 1
        },
        {
          state: "unlocked",
          timestamp: 2
        },
        {
          state: "locked",
          timestamp: 3
        },
        {
          state: "unlocked",
          timestamp: 4
        },
        {
          state: "locked",
          timestamp: 5
        },
        {
          state: "unlocked",
          timestamp: 6
        },
        {
          state: "locked",
          timestamp: 7
        },
        {
          state: "unlocked",
          timestamp: 8
        },
        {
          state: "locked",
          timestamp: 9
        },
        {
          state: "unlocked",
          timestamp: 10
        }
      ]
    };

    const expectedState = {
      "apt-143-lock": [
        {
          state: "unlocked",
          timestamp: 2
        },
        {
          state: "locked",
          timestamp: 3
        },
        {
          state: "unlocked",
          timestamp: 4
        },
        {
          state: "locked",
          timestamp: 5
        },
        {
          state: "unlocked",
          timestamp: 6
        },
        {
          state: "locked",
          timestamp: 7
        },
        {
          state: "unlocked",
          timestamp: 8
        },
        {
          state: "locked",
          timestamp: 9
        },
        {
          state: "unlocked",
          timestamp: 10
        },
        {
          state: "locked",
          timestamp: 11
        }
      ]
    };

    expect(history(testState, testAction)).toEqual(expectedState);
  });
});

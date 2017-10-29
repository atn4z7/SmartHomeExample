import { CHANGE_DEVICE_STATE } from "../app/store/Actions";
import home from "../app/store/reducer/home";

const initialState = {
  unit: "Apartment 143",
  deviceIds: ["apt-143-lock", "apt-143-switch", "apt-143-thermostat"],
  devices: {
    "apt-143-lock": {
      name: "Door Lock",
      type: "lock",
      state: "locked",
      last_updated_at: 1508386138,
      slug: "apt-143-lock"
    },
    "apt-143-switch": {
      name: "Light Switch",
      type: "switch",
      state: "unknown",
      last_updated_at: -1,
      slug: "apt-143-switch"
    },
    "apt-143-thermostat": {
      name: "Thermostat",
      type: "thermostat",
      state: "unknown",
      last_updated_at: -1,
      slug: "apt-143-thermostat"
    }
  }
};

describe("preconditions", () => {
  it("should return correct initial state", () => {
    expect(home(undefined, {})).toEqual(initialState);
  });
});

describe("CHANGE_DEVICE_STATE", () => {
  it("should update the state of an existing device", () => {
    const testAction = {
      type: CHANGE_DEVICE_STATE,
      name: "apt-143-lock",
      state: "unlocked",
      timestamp: 12345
    };

    const expectedState = {
      unit: "Apartment 143",
      deviceIds: ["apt-143-lock", "apt-143-switch", "apt-143-thermostat"],
      devices: {
        "apt-143-lock": {
          name: "Door Lock",
          type: "lock",
          state: "unlocked",
          last_updated_at: 12345,
          slug: "apt-143-lock"
        },
        "apt-143-switch": {
          name: "Light Switch",
          type: "switch",
          state: "unknown",
          last_updated_at: -1,
          slug: "apt-143-switch"
        },
        "apt-143-thermostat": {
          name: "Thermostat",
          type: "thermostat",
          state: "unknown",
          last_updated_at: -1,
          slug: "apt-143-thermostat"
        }
      }
    };

    expect(home(initialState, testAction)).toEqual(expectedState);
  });

  it("should not update anything when device doesn't exist", () => {
    const testAction = {
      type: CHANGE_DEVICE_STATE,
      name: "apt-1433-lock",
      state: "unlocked",
      timestamp: 12345
    };

    expect(home(initialState, testAction)).toEqual(initialState);
    expect(home({}, testAction)).toEqual({});
  });
});

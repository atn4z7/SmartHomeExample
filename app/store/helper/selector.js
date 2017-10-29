import { createSelector } from "reselect";

const deviceIdsSelector = state => state.deviceIds;
const devicesSelector = state => state.devices;

export const allDevicesSelector = createSelector(
  deviceIdsSelector,
  devicesSelector,
  (deviceIds, devices) => deviceIds.map(id => ({ ...devices[id] }))
);

import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTrackIdState",
  default: null,
});

export const isPlaingState = atom({
  key: "isPlaingState",
  default: false,
});

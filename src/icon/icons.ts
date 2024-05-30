import { lazy } from "react";

type SvgModule = typeof import("*.svg");

function loadLazily(loadFn: () => Promise<SvgModule>) {
  return lazy(async () => {
    const module: SvgModule = await loadFn();
    return { default: module.ReactComponent };
  });
}

export const icons = {
  Add: loadLazily(async () => import("./assets/add.svg")),
  AddressBook: loadLazily(async () => import("./assets/address-book.svg")),
  AlarmClock: loadLazily(async () => import("./assets/alarm-clock.svg")),
};

export type IconName = keyof typeof icons;

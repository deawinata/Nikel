import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";

export const isMobile = atom(false);
export const cart = atomWithStorage<string>("__cart", "")
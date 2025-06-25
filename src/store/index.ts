import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";

export const isLoading = atomWithStorage<boolean>("__isLoading", false);
export const cart = atomWithStorage<string>("__cart", "")
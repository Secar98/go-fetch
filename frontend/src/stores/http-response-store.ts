import { writable } from "svelte/store";

const response: Response = {} as Response;

export const httpResponseStore = writable(response);
import { writable } from "svelte/store";
import { main } from "../../wailsjs/go/models";

const response: main.HttpResponse = {} as main.HttpResponse;

export const httpResponseStore = writable(response);
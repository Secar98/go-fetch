import { writable } from "svelte/store";
import { main } from "../../wailsjs/go/models";


export class HttpResponse extends main.HttpResponse {}

const response = new HttpResponse();
export const httpResponseStore = writable(response);
import { writable } from 'svelte/store';
export class HttpRequestStore {
    url: string = "";
    method: string = "";
    headers: Map<string,string> = new Map();
    formData: Map<string,string> = new Map();
    json: string = "";
    queryParameters: Map<string,string> = new Map();
    selectedBodyType: BodyType = BodyType.NONE;
}

export enum BodyType {
    FORM_DATA = "form-data",
    JSON = "json",
    NONE = "none"
}

export const httpRequestStore = writable(new HttpRequestStore());
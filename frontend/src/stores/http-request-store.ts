import { writable } from 'svelte/store';
export class HttpRequestStore {
    url: string = "";
    method: string = "";
    headers: any = [];
    formData: KeyValue[] = [];
    json: string = "";
    queryParameters: any = [];
    selectedBodyType: BodyType = BodyType.NONE;
}


export enum BodyType {
    FORM_DATA = "form-data",
    JSON = "json",
    NONE = "none"
}

export class KeyValue {
    key: string;
    value: string;
}

export const httpRequestStore = writable(new HttpRequestStore());
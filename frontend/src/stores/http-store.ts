import { writable } from 'svelte/store';
class HttpStore {
    url: string = "";
    method: string = "";
    headers: any = [];
    formData: KeyValue[] = [];
    json: string = "";
    queryParameters: any = [];
}

export class KeyValue {
    key: string;
    value: string;
}

export const httpStore = writable(new HttpStore());
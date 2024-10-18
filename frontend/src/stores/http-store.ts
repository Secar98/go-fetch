import { writable } from 'svelte/store';
class HttpStore {
    url: string = "";
    method: string = "";
    headers: any = [];
    formData: FormDataEntry[] = [];
    json: string = "";
    queryParameters: any = [];
}

export class FormDataEntry {
    key: string;
    value: string;
}

export const httpStore = writable(new HttpStore());
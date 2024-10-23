import { writable } from 'svelte/store';
export class HttpRequestStore {
    url: string = "";
    method: HttpMethod = HttpMethod.GET;
    headers: Map<string,string> = new Map();
    formData: Map<string,string> = new Map();
    json: string = "";
    queryParameters: Map<string,string> = new Map();
    selectedBodyType: BodyType = BodyType.NONE;
}

export enum BodyType {
    FORM_DATA = "form-data",
    JSON = "json",
    URL_ENCODED = "url-encoded",
    NONE = "none"
}

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    OPTIONS = 'OPTIONS',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    HEAD = 'HEAD'
}

export const stringToHttpMethod = (method: string): HttpMethod => {
    return HttpMethod[method as keyof typeof HttpMethod] || HttpMethod.GET;
}

export const httpRequestStore = writable(new HttpRequestStore());
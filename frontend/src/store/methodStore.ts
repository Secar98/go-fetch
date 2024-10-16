import { writable } from 'svelte/store';

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

export const selectedMethod = writable<HttpMethod>(HttpMethod.GET);
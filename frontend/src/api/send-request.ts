import { httpRequestStore, HttpRequestStore } from "../stores/http-request-store";
import { httpResponseStore } from "../stores/http-response-store";
import { get } from "svelte/store";
import { SendRequest } from "../../wailsjs/go/main/App.js";
import { main } from "../../wailsjs/go/models";

async function makeRequest(request: HttpRequestStore): Promise<main.HttpResponse | string> {
    const goReq = main.HttpRequest.createFrom({
        Url: request.url,
        Method: request.method,
        Headers: Object.fromEntries(request.headers.entries()) as { [key: string]: string },
        FormData: Object.fromEntries(request.formData.entries()) as { [key: string]: string },
        Json: request.json,
        QueryParameters: Object.fromEntries(request.queryParameters.entries()) as { [key: string]: string },
        SelectedBodyType: request.selectedBodyType.toString()
    });
    return SendRequest(goReq);
}


export default async function sendRequest() {
    const request: HttpRequestStore = get(httpRequestStore);

    const resp = await makeRequest(request) as main.HttpResponse;
    if (resp.Error !== "") {
        return httpResponseStore.update(store => {
            store.Error = resp.Error;
            return store;
        });
    }

    httpResponseStore.update(_ => {
        return resp;
    });
}
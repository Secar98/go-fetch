import { BodyType, httpRequestStore, HttpRequestStore } from "../stores/http-request-store";
import { httpResponseStore } from "../stores/http-response-store";
import { get } from "svelte/store";
import { SendRequest } from "../../wailsjs/go/main/App.js";
import { main } from "../../wailsjs/go/models";

async function makeRequest(request: HttpRequestStore): Promise<main.HttpResponse | string> {
    const goReq = main.HttpRequest.createFrom({
        Url: request.url,
        Method: request.method,
        Headers: request.headers,
        FormData: request.formData,
        Json: request.json,
        QueryParameters: request.queryParameters,
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
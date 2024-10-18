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
        SelectedBodyType: BodyType[request.selectedBodyType]
    });
    console.log(goReq);
    return SendRequest(goReq);
}


export default async function sendRequest() {
    const request: HttpRequestStore = get(httpRequestStore);

    const resp = await makeRequest(request) as main.HttpResponse;
    if (resp.StatusCode === 0 && resp.Body === '') {
        console.error('Error:', resp);
        return;
    }

    httpResponseStore.update(_ => {
        return resp;
    });
}
import { BodyType, HttpRequestStore } from "src/stores/http-request-store";

export default async function sendRequest(httpStore: HttpRequestStore) {
    const body: any = httpStore.selectedBodyType === BodyType.JSON ? httpStore.json : httpStore.formData as any;

    let response: Response = await fetch(httpStore.url, {
        method: httpStore.method,
        headers: httpStore.headers,
        body: body,
    });


}
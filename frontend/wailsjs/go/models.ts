export namespace main {
	
	export class HttpRequest {
	    Url: string;
	    Method: string;
	    Headers: {[key: string]: string};
	    FormData: {[key: string]: string};
	    Json: string;
	    QueryParameters: {[key: string]: string};
	    SelectedBodyType: string;
	
	    static createFrom(source: any = {}) {
	        return new HttpRequest(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Url = source["Url"];
	        this.Method = source["Method"];
	        this.Headers = source["Headers"];
	        this.FormData = source["FormData"];
	        this.Json = source["Json"];
	        this.QueryParameters = source["QueryParameters"];
	        this.SelectedBodyType = source["SelectedBodyType"];
	    }
	}

}

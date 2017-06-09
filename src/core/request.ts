import { Injectable } from "@angular/core";
import {
  Headers,
  Request,
  RequestOptions,
  RequestMethod,
  ResponseType,
  ResponseContentType,
  URLSearchParams
} from '@angular/http';

@Injectable()
export class RequestService {
    private readonly _AUTHORIZATION: string = "Authorization"
    private readonly _BASIC: string = "Basic"
    private readonly _API: string = "api"
    private _url: string
    private _authData: string

    constructor() { }

    request(
        url: string,
        method: RequestMethod,
        params?: APIParameters,
        body?: any): Request {
        if (!params) {
            params = new APIParameters()
        }
        return this.getRequest(url, method, params, ResponseContentType.Json, body)
    }

    getAuthData(data: string): string {
        return btoa(data + ":")
    }

    apiConfigurationRequest(url: string, key?: string, authData?: string): Request {
        if (!key && !authData)
            throw "key or authData is required"

        if (!authData)
            authData = this.getAuthData(key)
        
        this._url = url
        this._authData = authData

        return new Request({
            url: this.buildUrl([]),
            method: RequestMethod.Get,
            headers: this.headers,
            params: new APIParameters(),
            responseType: ResponseContentType.Json
        })
    }

    setXHRHeaders(request: XMLHttpRequest) {
        request.setRequestHeader(this._AUTHORIZATION, this.getAuthValue(this._authData))
    }

    resourceUrl(resource: string, id?: string): string {
        let parts = [resource]
        if (id)
            parts.push(id)
        return this.buildUrl(parts)
    }

    private _headers: Headers
    get headers(): Headers {
        if (!this._headers) {
            this._headers = new Headers(this.getAuthHeaders(this._authData))
        }
        else {
            if(this._authData != this._headers.get(this._AUTHORIZATION))
                this._headers.set(this._AUTHORIZATION, this._authData)
        }
        return this._headers
    }

    private getAuthHeaders(authData: string): { [name: string]: string } {
        let h = {}
        h[this._AUTHORIZATION] = this.getAuthValue(authData)
        return h
    }

    private getRequest(
        url: string,
        method: RequestMethod,
        params: APIParameters,
        responseType: ResponseContentType,
        body: any): Request {
        return new Request({
            url: url,
            params: params,
            headers: this.headers,
            responseType: responseType,
            method: method,
            body
        })
    }

    private getAuthValue(authData: string): string {
        return this._BASIC + " " + authData
    }

    private buildUrl(parts: string[]): string {
        return this.computeUrl([this._url, this._API].concat(parts))
    }

    apiUrl(): string {
        return this.buildUrl([])
    }

    get siteUrl(): string {
        return this._url
    }

    getResourceImageUrl(resource: string, id: string, id_image?: string): string {
        let url: string[] = [this.apiUrl(), "images", resource, id]
        if (id_image)
            url.push(id_image)
        return this.computeUrl(url)
    }

    computeUrl(parts: string[]) {
        return parts.join("/")
    }
}

export enum APIParametersNames {
    display,
    filter,
    output_format,
    language,
    ps_method
}

export enum APIParametersValues {
    JSON,
    XML,
    full,
    GET,
    POST,
    PUT,
    DELETE,
}


export class APIParameters extends URLSearchParams {

    static getOutputFormatPart(format: APIParametersValues = APIParametersValues.JSON) {
        return `${APIParametersNames[APIParametersNames.output_format]}=${APIParametersValues[format]}`
    }

    constructor() {
        super()
        this.outputFormat = APIParametersValues.JSON
    }

    private _outputFormat: APIParametersValues
    public get outputFormat(): APIParametersValues {
        return this._outputFormat;
    }

    public set outputFormat(v: APIParametersValues) {
        this._outputFormat = v;
        this.set(
            APIParametersNames[APIParametersNames.output_format],
            APIParametersValues[v])
    }

    private _display: string[] | APIParametersValues.full;
    public get display(): string[] | APIParametersValues.full {
        return this._display;
    }

    public set display(v: string[] | APIParametersValues.full) {
        this._display = v
        let stringVal: string
        if (v == APIParametersValues.full)
            stringVal = APIParametersValues[APIParametersValues.full]
        else
            stringVal = this.arrayValue(v, ",")
        this.set(APIParametersNames[APIParametersNames.display], stringVal)
    }


    private _id_language: string;
    public get id_language(): string {
        return this._id_language;
    }
    public set id_language(v: string) {
        this._id_language = v;
        this.set(APIParametersNames[APIParametersNames.language], v)
    }

    filter(name, values: string[], separator?: string) {
        if (!separator)
            separator = "|"
        let stringVal: string = values.join(separator)
        name = APIParametersNames[APIParametersNames.filter] + `[${name}]`
        this.set(name, this.arrayValue(values, separator))
    }

    private arrayValue(strings: string[], separator): string {
        return `[${strings.join(separator)}]`
    }
}
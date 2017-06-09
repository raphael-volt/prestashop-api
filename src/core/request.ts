import { URLSearchParams } from '@angular/http'

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

    
    private _id_language : string;
    public get id_language() : string {
        return this._id_language;
    }
    public set id_language(v : string) {
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
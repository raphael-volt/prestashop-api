"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var RequestService = (function () {
    function RequestService() {
        this._AUTHORIZATION = "Authorization";
        this._BASIC = "Basic";
        this._API = "api";
    }
    RequestService.prototype.search = function (resource, params) {
        return this.request(this.resourceUrl(resource), http_1.RequestMethod.Get, params);
    };
    RequestService.prototype.resource = function (resource, id, id_language) {
        var params = new APIParameters();
        params.id_language = id_language;
        return this.request(this.resourceUrl(resource, id), http_1.RequestMethod.Get, params);
    };
    RequestService.prototype.request = function (url, method, params, body) {
        if (!params) {
            params = new APIParameters();
        }
        return this.getRequest(url, method, params, http_1.ResponseContentType.Json, body);
    };
    RequestService.prototype.getAuthData = function (data) {
        return btoa(data + ":");
    };
    RequestService.prototype.apiConfigurationRequest = function (url, key) {
        this._url = url;
        this._authData = this.getAuthData(key);
        return new http_1.Request({
            url: this.buildUrl([]),
            method: http_1.RequestMethod.Get,
            headers: this.headers,
            params: new APIParameters(),
            responseType: http_1.ResponseContentType.Json
        });
    };
    RequestService.prototype.setXHRHeaders = function (request) {
        request.setRequestHeader(this._AUTHORIZATION, this.getAuthValue(this._authData));
    };
    RequestService.prototype.resourceUrl = function (resource, id) {
        var parts = [resource];
        if (id)
            parts.push(id);
        return this.buildUrl(parts);
    };
    Object.defineProperty(RequestService.prototype, "headers", {
        get: function () {
            if (!this._headers) {
                this._headers = new http_1.Headers(this.getAuthHeaders(this._authData));
            }
            /*
            else {
                if(this._authData != this._headers.get(this._AUTHORIZATION))
                    this._headers.set(this._AUTHORIZATION, this._authData)
            }
            */
            return this._headers;
        },
        enumerable: true,
        configurable: true
    });
    RequestService.prototype.getAuthHeaders = function (authData) {
        var h = {};
        h[this._AUTHORIZATION] = this.getAuthValue(authData);
        return h;
    };
    RequestService.prototype.getRequest = function (url, method, params, responseType, body) {
        return new http_1.Request({
            url: url,
            params: params,
            headers: this.headers,
            responseType: responseType,
            method: method,
            body: body
        });
    };
    RequestService.prototype.getAuthValue = function (authData) {
        return this._BASIC + " " + authData;
    };
    RequestService.prototype.buildUrl = function (parts) {
        return this.computeUrl([this._url, this._API].concat(parts));
    };
    RequestService.prototype.apiUrl = function () {
        return this.buildUrl([]);
    };
    Object.defineProperty(RequestService.prototype, "siteUrl", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    RequestService.prototype.getResourceImageUrl = function (resource, id, id_image) {
        var url = [this.apiUrl(), "images", resource, id];
        if (id_image)
            url.push(id_image);
        return this.computeUrl(url);
    };
    RequestService.prototype.computeUrl = function (parts) {
        return parts.join("/");
    };
    return RequestService;
}());
RequestService = __decorate([
    core_1.Injectable()
], RequestService);
exports.RequestService = RequestService;
var APIParametersNames;
(function (APIParametersNames) {
    APIParametersNames[APIParametersNames["display"] = 0] = "display";
    APIParametersNames[APIParametersNames["filter"] = 1] = "filter";
    APIParametersNames[APIParametersNames["output_format"] = 2] = "output_format";
    APIParametersNames[APIParametersNames["language"] = 3] = "language";
    APIParametersNames[APIParametersNames["ps_method"] = 4] = "ps_method";
})(APIParametersNames = exports.APIParametersNames || (exports.APIParametersNames = {}));
var APIParametersValues;
(function (APIParametersValues) {
    APIParametersValues[APIParametersValues["JSON"] = 0] = "JSON";
    APIParametersValues[APIParametersValues["XML"] = 1] = "XML";
    APIParametersValues[APIParametersValues["full"] = 2] = "full";
    APIParametersValues[APIParametersValues["GET"] = 3] = "GET";
    APIParametersValues[APIParametersValues["POST"] = 4] = "POST";
    APIParametersValues[APIParametersValues["PUT"] = 5] = "PUT";
    APIParametersValues[APIParametersValues["DELETE"] = 6] = "DELETE";
})(APIParametersValues = exports.APIParametersValues || (exports.APIParametersValues = {}));
var APIParameters = (function (_super) {
    __extends(APIParameters, _super);
    function APIParameters() {
        var _this = _super.call(this) || this;
        _this.outputFormat = APIParametersValues.JSON;
        return _this;
    }
    APIParameters.getOutputFormatPart = function (format) {
        if (format === void 0) { format = APIParametersValues.JSON; }
        return APIParametersNames[APIParametersNames.output_format] + "=" + APIParametersValues[format];
    };
    Object.defineProperty(APIParameters.prototype, "outputFormat", {
        get: function () {
            return this._outputFormat;
        },
        set: function (v) {
            this._outputFormat = v;
            this.set(APIParametersNames[APIParametersNames.output_format], APIParametersValues[v]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIParameters.prototype, "display", {
        get: function () {
            return this._display;
        },
        set: function (v) {
            this._display = v;
            var stringVal;
            if (v == APIParametersValues.full)
                stringVal = APIParametersValues[APIParametersValues.full];
            else
                stringVal = this.arrayValue(v, ",");
            this.set(APIParametersNames[APIParametersNames.display], stringVal);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIParameters.prototype, "id_language", {
        get: function () {
            return this._id_language;
        },
        set: function (v) {
            this._id_language = v;
            this.set(APIParametersNames[APIParametersNames.language], v);
        },
        enumerable: true,
        configurable: true
    });
    APIParameters.prototype.filter = function (name, values, separator) {
        if (!separator)
            separator = "|";
        var stringVal = values.join(separator);
        name = APIParametersNames[APIParametersNames.filter] + ("[" + name + "]");
        this.set(name, this.arrayValue(values, separator));
    };
    APIParameters.prototype.arrayValue = function (strings, separator) {
        return "[" + strings.join(separator) + "]";
    };
    return APIParameters;
}(http_1.URLSearchParams));
exports.APIParameters = APIParameters;

import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  XHRBackend,
  BaseRequestOptions
} from "@angular/http";

describe('SampleTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        XHRBackend,
        {
          provide: Http,
          deps: [XHRBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions)
          }
        }
      ],
      imports: [
        HttpModule
      ]
    })
  })

  it("should be true", inject([Http], (http: Http) => {
    expect(http).not.toBeNull()
    expect(http).not.toBeUndefined()
  }))
})
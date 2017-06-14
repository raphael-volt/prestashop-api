import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  BaseRequestOptions,
  XHRBackend,
  RequestMethod
} from "@angular/http";
import {
  PrestashopApiModule,
} from "../prestashop-api.module";
import { CategoryService, APIService } from "../prestashop-api.service";
import { Category } from "../core/model";
import { 
  RequestService,
  APIParameters,
  APIParametersNames,
  APIParametersValues 
} from "../core/request";
import 'rxjs/add/operator/map';
describe('FakeServiceService', () => {
  let apiService: APIService
  let categoryService: CategoryService
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
        },
        RequestService,
        {
          provide: APIService,
          deps: [Http, RequestService],
          useFactory: (http: Http, service: RequestService) => {
            return new APIService(http, service)
          }
        },
        {
          provide: CategoryService,
          deps: [Http, APIService],
          useFactory: (http: Http, service: APIService) => {
            return new CategoryService(http, service)
          }
        }
      ],
      imports: [
        HttpModule,
        PrestashopApiModule
      ]
    });
  });

  it('should be created', inject([APIService, CategoryService], (service: APIService, category_service: CategoryService) => {
    expect(service).toBeTruthy();
    expect(category_service).toBeTruthy();
    apiService = service
    categoryService = category_service
  }));
  
  it('should initialize api connection and provide languages', async(() => {
    apiService.connect("http://172.23.0.4", "1XNCKZMANDQ8BFWGPPS5G8UNG7CL3Z7A").subscribe(connected => {
      expect(connected).toBeTruthy()
      expect(apiService.connected).toBeTruthy()
      expect(apiService.id_language).not.toBeNull()
    },
    error => {
      console.log(error)
      expect(true).toBeFalsy()
    })
  }))

  it("should provide categories and serialize", async(() => {
    let params: APIParameters = new APIParameters()
    params.id_language = apiService.id_language
    params.display = APIParametersValues.full
    categoryService.search(params).subscribe(categories => {
      expect(categories).toBeTruthy()
      expect(categories instanceof Array).toBeTruthy()
      expect(categories.length).toBeGreaterThan(0)
      expect(categories[0].associations).not.toBeUndefined()
      expect(categories[0].associations).not.toBeNull()

      let data = categoryService.serialize(categories[0], RequestMethod.Post)
      expect(data instanceof Error).toBeTruthy()
      let c: Category = {
        id: "2",
        level_depth: "1",
	      nb_products_recursive: "12",
        id_parent: "1",
        active: "1",
        id_shop_default: "1",
        is_root_category: "1",
        position: "0",
        date_add: "2016-11-06 21:57:54",
        date_upd: "2017-01-13 01:15:03",
        name: "Accueil",
        link_rewrite: "accueil",
        description: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
        associations: {
          categories: [
            {id: "63"},
            {id: "64"},
            {id: "65"},
            {id: "62"}
          ]
        }
      }
      let expected: string = `<prestashop>
<category>
<id>2</id>
<id_parent>1</id_parent>
<active>1</active>
<id_shop_default>1</id_shop_default>
<is_root_category>1</is_root_category>
<position>0</position>
<date_add>2016-11-06 21:57:54</date_add>
<date_upd>2017-01-13 01:15:03</date_upd>
<name><language id="1">Accueil</language></name>
<link_rewrite><language id="1">accueil</language></link_rewrite>
<description><language id="1"></language></description>
<meta_title><language id="1"></language></meta_title>
<meta_description><language id="1"></language></meta_description>
<meta_keywords><language id="1"></language></meta_keywords>
<associations>
<categories>
<category>
<id>63</id>
<id>64</id>
<id>65</id>
<id>62</id>
</category>
</categories>
<products>
</products>
</associations>
</category>
</prestashop>`
      data = categoryService.serialize(categories[1], RequestMethod.Put)
      expect(expected).toEqual(data)
    })
  }))
});

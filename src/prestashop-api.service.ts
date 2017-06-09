import { Injectable } from '@angular/core'
import {
  Http,
  Request,
  RequestMethod,
  Response
} from '@angular/http'
import { Observer, Observable } from 'rxjs'

@Injectable()
export class APIService {

}

import { PSObject } from './core/model'

abstract class AbstractService<T extends PSObject> {
	constructor(
		protected http: Http,
		protected apiService: APIService,
		protected nodename: string,
		protected resource: string,
		protected properties: string[],
		protected translatableIndexes: number[],
		protected readonlyIndexes: number[],
		protected requiredIndexes: number[]) { 

	}

	createInstance(id: string | null): T {
		return <T>{ id: id }
	}
}

import {
	Address,
	Carrier,
	CartRule,
	Cart,
	Category,
	Combination,
	Configuration,
	Contact,
	Content,
	Country,
	Currency,
	CustomerMessage,
	CustomerThread,
	Customer,
	Customization,
	Delivery,
	Employee,
	Group,
	Guest,
	ImageType,
	Language,
	Manufacturer,
	OrderCarrier,
	OrderDetail,
	OrderCartRule,
	OrderHistory,
	OrderInvoice,
	OrderPayment,
	OrderSlip,
	OrderState,
	Order,
	PriceRange,
	CustomizationField,
	ProductFeatureValue,
	ProductFeature,
	ProductOptionValue,
	ProductOption,
	ProductSupplier,
	Product,
	ShopGroup,
	ShopUrl,
	Shop,
	SpecificPriceRule,
	SpecificPrice,
	State,
	StockAvailable,
	StockMovementReason,
	StockMvt,
	Stock,
	Store,
	Supplier,
	SupplyOrderDetail,
	SupplyOrderHistory,
	SupplyOrderReceiptHistory,
	SupplyOrderState,
	SupplyOrder,
	Tag,
	TaxRuleGroup,
	TaxRule,
	Tax,
	TranslatedConfiguration,
	WarehouseProductLocation,
	Warehouse,
	WeightRange,
	Zone
} from './core/model'

@Injectable()
export class AddressService extends AbstractService<Address> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'address', 'addresses',
			[
				'id_customer',
				'id_manufacturer',
				'id_supplier',
				'id_warehouse',
				'id_country' /* [4] */,
				'id_state',
				'alias' /* [6] */,
				'company',
				'lastname' /* [8] */,
				'firstname' /* [9] */,
				'vat_number',
				'address1' /* [11] */,
				'address2',
				'postcode',
				'city' /* [14] */,
				'other',
				'phone',
				'phone_mobile',
				'dni',
				'deleted',
				'date_add',
				'date_upd'
			],
			[],
			[],
			[4, 6, 8, 9, 11, 14])
	}
}

@Injectable()
export class CarrierService extends AbstractService<Carrier> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'carrier', 'carriers',
			[
				'deleted',
				'is_module',
				'id_tax_rules_group',
				'id_reference',
				'name' /* [4] */,
				'active' /* [5] */,
				'is_free',
				'url',
				'shipping_handling',
				'shipping_external',
				'range_behavior',
				'shipping_method',
				'max_width',
				'max_height',
				'max_depth',
				'max_weight',
				'grade',
				'external_module_name',
				'need_range',
				'position',
				'delay' /* [20] */
			],
			[20],
			[],
			[4, 5, 20])
	}
}

@Injectable()
export class CartRuleService extends AbstractService<CartRule> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'cart_rule', 'cart_rules',
			[
				'id_customer',
				'date_from' /* [1] */,
				'date_to' /* [2] */,
				'description',
				'quantity',
				'quantity_per_user',
				'priority',
				'partial_use',
				'code',
				'minimum_amount',
				'minimum_amount_tax',
				'minimum_amount_currency',
				'minimum_amount_shipping',
				'country_restriction',
				'carrier_restriction',
				'group_restriction',
				'cart_rule_restriction',
				'product_restriction',
				'shop_restriction',
				'free_shipping',
				'reduction_percent',
				'reduction_amount',
				'reduction_tax',
				'reduction_currency',
				'reduction_product',
				'gift_product',
				'gift_product_attribute',
				'highlight',
				'active',
				'date_add',
				'date_upd',
				'name' /* [31] */
			],
			[31],
			[],
			[1, 2, 31])
	}
}

@Injectable()
export class CartService extends AbstractService<Cart> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'cart', 'carts',
			[
				'id_address_delivery',
				'id_address_invoice',
				'id_currency' /* [2] */,
				'id_customer',
				'id_guest',
				'id_lang' /* [5] */,
				'id_shop_group',
				'id_shop',
				'id_carrier',
				'recyclable',
				'gift',
				'gift_message',
				'mobile_theme',
				'delivery_option',
				'secure_key',
				'allow_seperated_package',
				'date_add',
				'date_upd'
			],
			[],
			[],
			[2, 5])
	}
}

@Injectable()
export class CategoryService extends AbstractService<Category> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'category', 'categories',
			[
				'id_parent',
				'level_depth' /* [1] */,
				'nb_products_recursive' /* [2] */,
				'active' /* [3] */,
				'id_shop_default',
				'is_root_category',
				'position',
				'date_add',
				'date_upd',
				'name' /* [9] */,
				'link_rewrite' /* [10] */,
				'description' /* [11] */,
				'meta_title' /* [12] */,
				'meta_description' /* [13] */,
				'meta_keywords' /* [14] */
			],
			[9, 10, 11, 12, 13, 14],
			[1, 2],
			[3, 9, 10])
	}
}

@Injectable()
export class CombinationService extends AbstractService<Combination> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'combination', 'combinations',
			[
				'id_product' /* [0] */,
				'location',
				'ean13',
				'upc',
				'quantity',
				'reference',
				'supplier_reference',
				'wholesale_price',
				'price',
				'ecotax',
				'weight',
				'unit_price_impact',
				'minimal_quantity' /* [12] */,
				'default_on',
				'available_date'
			],
			[],
			[],
			[0, 12])
	}
}

@Injectable()
export class ConfigurationService extends AbstractService<Configuration> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'configuration', 'configurations',
			[
				'value',
				'name' /* [1] */,
				'id_shop_group',
				'id_shop',
				'date_add',
				'date_upd'
			],
			[],
			[],
			[1])
	}
}

@Injectable()
export class ContactService extends AbstractService<Contact> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'contact', 'contacts',
			[
				'email',
				'customer_service',
				'name' /* [2] */,
				'description' /* [3] */
			],
			[2, 3],
			[],
			[2])
	}
}

@Injectable()
export class ContentService extends AbstractService<Content> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'content', 'content_management_system',
			[
				'id_cms_category',
				'position',
				'indexation',
				'active',
				'meta_description' /* [4] */,
				'meta_keywords' /* [5] */,
				'meta_title' /* [6] */,
				'link_rewrite' /* [7] */,
				'content' /* [8] */
			],
			[4, 5, 6, 7, 8],
			[],
			[6, 7])
	}
}

@Injectable()
export class CountryService extends AbstractService<Country> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'country', 'countries',
			[
				'id_zone' /* [0] */,
				'id_currency',
				'call_prefix',
				'iso_code' /* [3] */,
				'active',
				'contains_states' /* [5] */,
				'need_identification_number' /* [6] */,
				'need_zip_code',
				'zip_code_format',
				'display_tax_label' /* [9] */,
				'name' /* [10] */
			],
			[10],
			[],
			[0, 3, 5, 6, 9, 10])
	}
}

@Injectable()
export class CurrencyService extends AbstractService<Currency> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'currency', 'currencies',
			[
				'name' /* [0] */,
				'iso_code' /* [1] */,
				'iso_code_num',
				'blank',
				'sign' /* [4] */,
				'format' /* [5] */,
				'decimals' /* [6] */,
				'conversion_rate' /* [7] */,
				'deleted',
				'active'
			],
			[],
			[],
			[0, 1, 4, 5, 6, 7])
	}
}

@Injectable()
export class CustomerMessageService extends AbstractService<CustomerMessage> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'customer_message', 'customer_messages',
			[
				'id_employee',
				'id_customer_thread',
				'ip_address',
				'message' /* [3] */,
				'file_name',
				'user_agent',
				'ps_private',
				'date_add',
				'date_upd',
				'read'
			],
			[],
			[],
			[3])
	}
}

@Injectable()
export class CustomerThreadService extends AbstractService<CustomerThread> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'customer_thread', 'customer_threads',
			[
				'id_lang' /* [0] */,
				'id_shop',
				'id_customer',
				'id_order',
				'id_product',
				'id_contact' /* [5] */,
				'email',
				'token' /* [7] */,
				'status',
				'date_add',
				'date_upd'
			],
			[],
			[],
			[0, 5, 7])
	}
}

@Injectable()
export class CustomerService extends AbstractService<Customer> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'customer', 'customers',
			[
				'id_default_group',
				'id_lang',
				'newsletter_date_add',
				'ip_registration_newsletter',
				'last_passwd_gen' /* [4] */,
				'secure_key' /* [5] */,
				'deleted',
				'passwd' /* [7] */,
				'lastname' /* [8] */,
				'firstname' /* [9] */,
				'email' /* [10] */,
				'id_gender',
				'birthday',
				'newsletter',
				'optin',
				'website',
				'company',
				'siret',
				'ape',
				'outstanding_allow_amount',
				'show_public_prices',
				'id_risk',
				'max_payment_days',
				'active',
				'note',
				'is_guest',
				'id_shop',
				'id_shop_group',
				'date_add',
				'date_upd'
			],
			[],
			[4, 5],
			[7, 8, 9, 10])
	}
}

@Injectable()
export class CustomizationService extends AbstractService<Customization> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'customization', 'customizations',
			[
				'id_address_delivery' /* [0] */,
				'id_cart' /* [1] */,
				'id_product' /* [2] */,
				'id_product_attribute' /* [3] */,
				'quantity' /* [4] */,
				'quantity_refunded' /* [5] */,
				'quantity_returned' /* [6] */,
				'in_cart' /* [7] */
			],
			[],
			[],
			[0, 1, 2, 3, 4, 5, 6, 7])
	}
}

@Injectable()
export class DeliveryService extends AbstractService<Delivery> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'delivery', 'deliveries',
			[
				'id_carrier' /* [0] */,
				'id_range_price' /* [1] */,
				'id_range_weight' /* [2] */,
				'id_zone' /* [3] */,
				'id_shop',
				'id_shop_group',
				'price' /* [6] */
			],
			[],
			[],
			[0, 1, 2, 3, 6])
	}
}

@Injectable()
export class EmployeeService extends AbstractService<Employee> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'employee', 'employees',
			[
				'id_lang' /* [0] */,
				'last_passwd_gen' /* [1] */,
				'stats_date_from' /* [2] */,
				'stats_date_to' /* [3] */,
				'stats_compare_from' /* [4] */,
				'stats_compare_to' /* [5] */,
				'passwd' /* [6] */,
				'lastname' /* [7] */,
				'firstname' /* [8] */,
				'email' /* [9] */,
				'active',
				'optin',
				'id_profile' /* [12] */,
				'bo_color',
				'default_tab',
				'bo_theme',
				'bo_css',
				'bo_width',
				'bo_menu',
				'stats_compare_option',
				'preselect_date_range',
				'id_last_order',
				'id_last_customer_message',
				'id_last_customer'
			],
			[],
			[1, 2, 3, 4, 5],
			[0, 6, 7, 8, 9, 12])
	}
}

@Injectable()
export class GroupService extends AbstractService<Group> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'group', 'groups',
			[
				'reduction',
				'price_display_method' /* [1] */,
				'show_prices',
				'date_add',
				'date_upd',
				'name' /* [5] */
			],
			[5],
			[],
			[1, 5])
	}
}

@Injectable()
export class GuestService extends AbstractService<Guest> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'guest', 'guests',
			[
				'id_customer',
				'id_operating_system',
				'id_web_browser',
				'javascript',
				'screen_resolution_x',
				'screen_resolution_y',
				'screen_color',
				'sun_java',
				'adobe_flash',
				'adobe_director',
				'apple_quicktime',
				'real_player',
				'windows_media',
				'accept_language',
				'mobile_theme'
			],
			[],
			[],
			[])
	}
}

@Injectable()
export class ImageTypeService extends AbstractService<ImageType> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'image_type', 'image_types',
			[
				'name' /* [0] */,
				'width' /* [1] */,
				'height' /* [2] */,
				'categories',
				'products',
				'manufacturers',
				'suppliers',
				'scenes',
				'stores'
			],
			[],
			[],
			[0, 1, 2])
	}
}

@Injectable()
export class LanguageService extends AbstractService<Language> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'language', 'languages',
			[
				'name' /* [0] */,
				'iso_code' /* [1] */,
				'language_code',
				'active',
				'is_rtl',
				'date_format_lite' /* [5] */,
				'date_format_full' /* [6] */
			],
			[],
			[],
			[0, 1, 5, 6])
	}
}

@Injectable()
export class ManufacturerService extends AbstractService<Manufacturer> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'manufacturer', 'manufacturers',
			[
				'active',
				'link_rewrite' /* [1] */,
				'name' /* [2] */,
				'date_add',
				'date_upd',
				'description' /* [5] */,
				'short_description' /* [6] */,
				'meta_title' /* [7] */,
				'meta_description' /* [8] */,
				'meta_keywords' /* [9] */
			],
			[5, 6, 7, 8, 9],
			[1],
			[2])
	}
}

@Injectable()
export class OrderCarrierService extends AbstractService<OrderCarrier> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'order_carrier', 'order_carriers',
			[
				'id_order' /* [0] */,
				'id_carrier' /* [1] */,
				'id_order_invoice',
				'weight',
				'shipping_cost_tax_excl',
				'shipping_cost_tax_incl',
				'tracking_number',
				'date_add'
			],
			[],
			[],
			[0, 1])
	}
}

@Injectable()
export class OrderDetailService extends AbstractService<OrderDetail> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'order_detail', 'order_details',
			[
				'id_order' /* [0] */,
				'product_id',
				'product_attribute_id',
				'product_quantity_reinjected',
				'group_reduction',
				'discount_quantity_applied',
				'download_hash',
				'download_deadline',
				'id_order_invoice',
				'id_warehouse' /* [9] */,
				'id_shop' /* [10] */,
				'product_name' /* [11] */,
				'product_quantity' /* [12] */,
				'product_quantity_in_stock',
				'product_quantity_return',
				'product_quantity_refunded',
				'product_price' /* [16] */,
				'reduction_percent',
				'reduction_amount',
				'reduction_amount_tax_incl',
				'reduction_amount_tax_excl',
				'product_quantity_discount',
				'product_ean13',
				'product_upc',
				'product_reference',
				'product_supplier_reference',
				'product_weight',
				'tax_computation_method',
				'id_tax_rules_group',
				'ecotax',
				'ecotax_tax_rate',
				'download_nb',
				'unit_price_tax_incl',
				'unit_price_tax_excl',
				'total_price_tax_incl',
				'total_price_tax_excl',
				'total_shipping_price_tax_excl',
				'total_shipping_price_tax_incl',
				'purchase_supplier_price',
				'original_product_price',
				'original_wholesale_price'
			],
			[],
			[],
			[0, 9, 10, 11, 12, 16])
	}
}

@Injectable()
export class OrderCartRuleService extends AbstractService<OrderCartRule> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'order_cart_rule', 'order_discounts',
			[
				'id_order' /* [0] */,
				'id_cart_rule' /* [1] */,
				'id_order_invoice',
				'name' /* [3] */,
				'value' /* [4] */,
				'value_tax_excl' /* [5] */,
				'free_shipping'
			],
			[],
			[],
			[0, 1, 3, 4, 5])
	}
}

@Injectable()
export class OrderHistoryService extends AbstractService<OrderHistory> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'order_history', 'order_histories',
			[
				'id_employee',
				'id_order_state' /* [1] */,
				'id_order' /* [2] */,
				'date_add'
			],
			[],
			[],
			[1, 2])
	}
}

@Injectable()
export class OrderInvoiceService extends AbstractService<OrderInvoice> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'order_invoice', 'order_invoices',
			[
				'id_order' /* [0] */,
				'number' /* [1] */,
				'delivery_number',
				'delivery_date',
				'total_discount_tax_excl',
				'total_discount_tax_incl',
				'total_paid_tax_excl',
				'total_paid_tax_incl',
				'total_products',
				'total_products_wt',
				'total_shipping_tax_excl',
				'total_shipping_tax_incl',
				'shipping_tax_computation_method',
				'total_wrapping_tax_excl',
				'total_wrapping_tax_incl',
				'shop_address',
				'invoice_address',
				'delivery_address',
				'note',
				'date_add'
			],
			[],
			[],
			[0, 1])
	}
}

@Injectable()
export class OrderPaymentService extends AbstractService<OrderPayment> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'order_payment', 'order_payments',
			[
				'order_reference',
				'id_currency' /* [1] */,
				'amount' /* [2] */,
				'payment_method',
				'conversion_rate',
				'transaction_id',
				'card_number',
				'card_brand',
				'card_expiration',
				'card_holder',
				'date_add'
			],
			[],
			[],
			[1, 2])
	}
}

@Injectable()
export class OrderSlipService extends AbstractService<OrderSlip> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'order_slip', 'order_slip',
			[
				'id_customer' /* [0] */,
				'id_order' /* [1] */,
				'conversion_rate' /* [2] */,
				'total_products_tax_excl' /* [3] */,
				'total_products_tax_incl' /* [4] */,
				'total_shipping_tax_excl' /* [5] */,
				'total_shipping_tax_incl' /* [6] */,
				'amount',
				'shipping_cost',
				'shipping_cost_amount',
				'partial',
				'date_add',
				'date_upd',
				'order_slip_type'
			],
			[],
			[],
			[0, 1, 2, 3, 4, 5, 6])
	}
}

@Injectable()
export class OrderStateService extends AbstractService<OrderState> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'order_state', 'order_states',
			[
				'unremovable',
				'delivery',
				'hidden',
				'send_email',
				'module_name',
				'invoice',
				'color',
				'logable',
				'shipped',
				'paid',
				'pdf_delivery',
				'pdf_invoice',
				'deleted',
				'name' /* [13] */,
				'template' /* [14] */
			],
			[13, 14],
			[],
			[13])
	}
}

@Injectable()
export class OrderService extends AbstractService<Order> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'order', 'orders',
			[
				'id_address_delivery' /* [0] */,
				'id_address_invoice' /* [1] */,
				'id_cart' /* [2] */,
				'id_currency' /* [3] */,
				'id_lang' /* [4] */,
				'id_customer' /* [5] */,
				'id_carrier' /* [6] */,
				'current_state',
				'module' /* [8] */,
				'invoice_number',
				'invoice_date',
				'delivery_number',
				'delivery_date',
				'valid',
				'date_add',
				'date_upd',
				'shipping_number',
				'id_shop_group',
				'id_shop',
				'secure_key',
				'payment' /* [20] */,
				'recyclable',
				'gift',
				'gift_message',
				'mobile_theme',
				'total_discounts',
				'total_discounts_tax_incl',
				'total_discounts_tax_excl',
				'total_paid' /* [28] */,
				'total_paid_tax_incl',
				'total_paid_tax_excl',
				'total_paid_real' /* [31] */,
				'total_products' /* [32] */,
				'total_products_wt' /* [33] */,
				'total_shipping',
				'total_shipping_tax_incl',
				'total_shipping_tax_excl',
				'carrier_tax_rate',
				'total_wrapping',
				'total_wrapping_tax_incl',
				'total_wrapping_tax_excl',
				'round_mode',
				'round_type',
				'conversion_rate' /* [43] */,
				'reference'
			],
			[],
			[],
			[0, 1, 2, 3, 4, 5, 6, 8, 20, 28, 31, 32, 33, 43])
	}
}

@Injectable()
export class PriceRangeService extends AbstractService<PriceRange> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'price_range', 'price_ranges',
			[
				'id_carrier' /* [0] */,
				'delimiter1' /* [1] */,
				'delimiter2' /* [2] */
			],
			[],
			[],
			[0, 1, 2])
	}
}

@Injectable()
export class CustomizationFieldService extends AbstractService<CustomizationField> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'customization_field', 'product_customization_fields',
			[
				'id_product' /* [0] */,
				'type' /* [1] */,
				'required' /* [2] */,
				'name' /* [3] */
			],
			[3],
			[],
			[0, 1, 2, 3])
	}
}

@Injectable()
export class ProductFeatureValueService extends AbstractService<ProductFeatureValue> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'product_feature_value', 'product_feature_values',
			[
				'id_feature' /* [0] */,
				'custom',
				'value' /* [2] */
			],
			[2],
			[],
			[0, 2])
	}
}

@Injectable()
export class ProductFeatureService extends AbstractService<ProductFeature> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'product_feature', 'product_features',
			[
				'position',
				'name' /* [1] */
			],
			[1],
			[],
			[1])
	}
}

@Injectable()
export class ProductOptionValueService extends AbstractService<ProductOptionValue> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'product_option_value', 'product_option_values',
			[
				'id_attribute_group' /* [0] */,
				'color',
				'position',
				'name' /* [3] */
			],
			[3],
			[],
			[0, 3])
	}
}

@Injectable()
export class ProductOptionService extends AbstractService<ProductOption> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'product_option', 'product_options',
			[
				'is_color_group',
				'group_type' /* [1] */,
				'position',
				'name' /* [3] */,
				'public_name' /* [4] */
			],
			[3, 4],
			[],
			[1, 3, 4])
	}
}

@Injectable()
export class ProductSupplierService extends AbstractService<ProductSupplier> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'product_supplier', 'product_suppliers',
			[
				'id_product' /* [0] */,
				'id_product_attribute' /* [1] */,
				'id_supplier' /* [2] */,
				'id_currency',
				'product_supplier_reference',
				'product_supplier_price_te'
			],
			[],
			[],
			[0, 1, 2])
	}
}

@Injectable()
export class ProductService extends AbstractService<Product> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'product', 'products',
			[
				'id_manufacturer',
				'id_supplier',
				'id_category_default',
				'ps_new',
				'cache_default_attribute',
				'id_default_image',
				'id_default_combination',
				'id_tax_rules_group',
				'position_in_category',
				'manufacturer_name' /* [9] */,
				'quantity' /* [10] */,
				'type',
				'id_shop_default',
				'reference',
				'supplier_reference',
				'location',
				'width',
				'height',
				'depth',
				'weight',
				'quantity_discount',
				'ean13',
				'upc',
				'cache_is_pack',
				'cache_has_attachments',
				'is_virtual',
				'on_sale',
				'online_only',
				'ecotax',
				'minimal_quantity',
				'price' /* [30] */,
				'wholesale_price',
				'unity',
				'unit_price_ratio',
				'additional_shipping_cost',
				'customizable',
				'text_fields',
				'uploadable_files',
				'active',
				'redirect_type',
				'id_product_redirected',
				'available_for_order',
				'available_date',
				'condition',
				'show_price',
				'indexed',
				'visibility',
				'advanced_stock_management',
				'date_add',
				'date_upd',
				'pack_stock_type',
				'meta_description' /* [51] */,
				'meta_keywords' /* [52] */,
				'meta_title' /* [53] */,
				'link_rewrite' /* [54] */,
				'name' /* [55] */,
				'description' /* [56] */,
				'description_short' /* [57] */,
				'available_now' /* [58] */,
				'available_later' /* [59] */
			],
			[51, 52, 53, 54, 55, 56, 57, 58, 59],
			[9, 10],
			[30, 54, 55])
	}
}

@Injectable()
export class ShopGroupService extends AbstractService<ShopGroup> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'shop_group', 'shop_groups',
			[
				'name' /* [0] */,
				'share_customer',
				'share_order',
				'share_stock',
				'active',
				'deleted'
			],
			[],
			[],
			[0])
	}
}

@Injectable()
export class ShopUrlService extends AbstractService<ShopUrl> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'shop_url', 'shop_urls',
			[
				'id_shop' /* [0] */,
				'active',
				'main',
				'domain' /* [3] */,
				'domain_ssl',
				'physical_uri',
				'virtual_uri'
			],
			[],
			[],
			[0, 3])
	}
}

@Injectable()
export class ShopService extends AbstractService<Shop> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'shop', 'shops',
			[
				'id_shop_group' /* [0] */,
				'id_category' /* [1] */,
				'id_theme' /* [2] */,
				'active',
				'deleted',
				'name' /* [5] */
			],
			[],
			[],
			[0, 1, 2, 5])
	}
}

@Injectable()
export class SpecificPriceRuleService extends AbstractService<SpecificPriceRule> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'specific_price_rule', 'specific_price_rules',
			[
				'id_shop' /* [0] */,
				'id_country' /* [1] */,
				'id_currency' /* [2] */,
				'id_group' /* [3] */,
				'name' /* [4] */,
				'from_quantity' /* [5] */,
				'price' /* [6] */,
				'reduction' /* [7] */,
				'reduction_tax' /* [8] */,
				'reduction_type' /* [9] */,
				'from',
				'to'
			],
			[],
			[],
			[0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
	}
}

@Injectable()
export class SpecificPriceService extends AbstractService<SpecificPrice> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'specific_price', 'specific_prices',
			[
				'id_shop_group',
				'id_shop' /* [1] */,
				'id_cart' /* [2] */,
				'id_product' /* [3] */,
				'id_product_attribute',
				'id_currency' /* [5] */,
				'id_country' /* [6] */,
				'id_group' /* [7] */,
				'id_customer' /* [8] */,
				'id_specific_price_rule',
				'price' /* [10] */,
				'from_quantity' /* [11] */,
				'reduction' /* [12] */,
				'reduction_tax' /* [13] */,
				'reduction_type' /* [14] */,
				'from' /* [15] */,
				'to' /* [16] */
			],
			[],
			[],
			[1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16])
	}
}

@Injectable()
export class StateService extends AbstractService<State> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'state', 'states',
			[
				'id_zone' /* [0] */,
				'id_country' /* [1] */,
				'iso_code' /* [2] */,
				'name' /* [3] */,
				'active'
			],
			[],
			[],
			[0, 1, 2, 3])
	}
}

@Injectable()
export class StockAvailableService extends AbstractService<StockAvailable> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'stock_available', 'stock_availables',
			[
				'id_product' /* [0] */,
				'id_product_attribute' /* [1] */,
				'id_shop',
				'id_shop_group',
				'quantity' /* [4] */,
				'depends_on_stock' /* [5] */,
				'out_of_stock' /* [6] */
			],
			[],
			[],
			[0, 1, 4, 5, 6])
	}
}

@Injectable()
export class StockMovementReasonService extends AbstractService<StockMovementReason> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'stock_movement_reason', 'stock_movement_reasons',
			[
				'sign',
				'deleted',
				'date_add',
				'date_upd',
				'name' /* [4] */
			],
			[4],
			[],
			[4])
	}
}

@Injectable()
export class StockMvtService extends AbstractService<StockMvt> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'stock_mvt', 'stock_movements',
			[
				'id_product',
				'id_product_attribute',
				'id_warehouse',
				'id_currency',
				'management_type',
				'id_employee' /* [5] */,
				'id_stock' /* [6] */,
				'id_stock_mvt_reason' /* [7] */,
				'id_order',
				'id_supply_order',
				'product_name' /* [10] */,
				'ean13',
				'upc',
				'reference',
				'physical_quantity' /* [14] */,
				'sign' /* [15] */,
				'last_wa',
				'current_wa',
				'price_te' /* [18] */,
				'date_add' /* [19] */
			],
			[10],
			[],
			[5, 6, 7, 14, 15, 18, 19])
	}
}

@Injectable()
export class StockService extends AbstractService<Stock> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'stock', 'stocks',
			[
				'id_warehouse' /* [0] */,
				'id_product' /* [1] */,
				'id_product_attribute' /* [2] */,
				'real_quantity' /* [3] */,
				'reference',
				'ean13',
				'upc',
				'physical_quantity' /* [7] */,
				'usable_quantity' /* [8] */,
				'price_te' /* [9] */
			],
			[],
			[3],
			[0, 1, 2, 7, 8, 9])
	}
}

@Injectable()
export class StoreService extends AbstractService<Store> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'store', 'stores',
			[
				'id_country' /* [0] */,
				'id_state',
				'hours',
				'name' /* [3] */,
				'address1' /* [4] */,
				'address2',
				'postcode',
				'city' /* [7] */,
				'latitude',
				'longitude',
				'phone',
				'fax',
				'note',
				'email',
				'active' /* [14] */,
				'date_add',
				'date_upd'
			],
			[],
			[],
			[0, 3, 4, 7, 14])
	}
}

@Injectable()
export class SupplierService extends AbstractService<Supplier> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'supplier', 'suppliers',
			[
				'link_rewrite',
				'name' /* [1] */,
				'active',
				'date_add',
				'date_upd',
				'description' /* [5] */,
				'meta_title' /* [6] */,
				'meta_description' /* [7] */,
				'meta_keywords' /* [8] */
			],
			[5, 6, 7, 8],
			[],
			[1])
	}
}

@Injectable()
export class SupplyOrderDetailService extends AbstractService<SupplyOrderDetail> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'supply_order_detail', 'supply_order_details',
			[
				'id_supply_order' /* [0] */,
				'id_product' /* [1] */,
				'id_product_attribute' /* [2] */,
				'reference',
				'supplier_reference',
				'name' /* [5] */,
				'ean13',
				'upc',
				'exchange_rate' /* [8] */,
				'unit_price_te' /* [9] */,
				'quantity_expected' /* [10] */,
				'quantity_received',
				'price_te' /* [12] */,
				'discount_rate' /* [13] */,
				'discount_value_te' /* [14] */,
				'price_with_discount_te' /* [15] */,
				'tax_rate' /* [16] */,
				'tax_value' /* [17] */,
				'price_ti' /* [18] */,
				'tax_value_with_order_discount' /* [19] */,
				'price_with_order_discount_te' /* [20] */
			],
			[],
			[],
			[0, 1, 2, 5, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20])
	}
}

@Injectable()
export class SupplyOrderHistoryService extends AbstractService<SupplyOrderHistory> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'supply_order_history', 'supply_order_histories',
			[
				'id_supply_order' /* [0] */,
				'id_employee' /* [1] */,
				'id_state' /* [2] */,
				'employee_firstname',
				'employee_lastname',
				'date_add' /* [5] */
			],
			[],
			[],
			[0, 1, 2, 5])
	}
}

@Injectable()
export class SupplyOrderReceiptHistoryService extends AbstractService<SupplyOrderReceiptHistory> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'supply_order_receipt_history', 'supply_order_receipt_histories',
			[
				'id_supply_order_detail' /* [0] */,
				'id_employee' /* [1] */,
				'id_supply_order_state' /* [2] */,
				'employee_firstname',
				'employee_lastname',
				'quantity' /* [5] */,
				'date_add'
			],
			[],
			[],
			[0, 1, 2, 5])
	}
}

@Injectable()
export class SupplyOrderStateService extends AbstractService<SupplyOrderState> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'supply_order_state', 'supply_order_states',
			[
				'delivery_note',
				'editable',
				'receipt_state',
				'pending_receipt',
				'enclosed',
				'color',
				'name' /* [6] */
			],
			[6],
			[],
			[6])
	}
}

@Injectable()
export class SupplyOrderService extends AbstractService<SupplyOrder> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'supply_order', 'supply_orders',
			[
				'id_supplier' /* [0] */,
				'id_lang' /* [1] */,
				'id_warehouse' /* [2] */,
				'id_supply_order_state' /* [3] */,
				'id_currency' /* [4] */,
				'supplier_name',
				'reference' /* [6] */,
				'date_delivery_expected' /* [7] */,
				'total_te',
				'total_with_discount_te',
				'total_ti',
				'total_tax',
				'discount_rate',
				'discount_value_te',
				'is_template',
				'date_add',
				'date_upd'
			],
			[],
			[],
			[0, 1, 2, 3, 4, 6, 7])
	}
}

@Injectable()
export class TagService extends AbstractService<Tag> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'tag', 'tags',
			[
				'id_lang' /* [0] */,
				'name' /* [1] */
			],
			[],
			[],
			[0, 1])
	}
}

@Injectable()
export class TaxRuleGroupService extends AbstractService<TaxRuleGroup> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'tax_rule_group', 'tax_rule_groups',
			[
				'name' /* [0] */,
				'active',
				'deleted',
				'date_add',
				'date_upd'
			],
			[],
			[],
			[0])
	}
}

@Injectable()
export class TaxRuleService extends AbstractService<TaxRule> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'tax_rule', 'tax_rules',
			[
				'id_tax_rules_group' /* [0] */,
				'id_state',
				'id_country' /* [2] */,
				'zipcode_from',
				'zipcode_to',
				'id_tax' /* [5] */,
				'behavior',
				'description'
			],
			[],
			[],
			[0, 2, 5])
	}
}

@Injectable()
export class TaxService extends AbstractService<Tax> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'tax', 'taxes',
			[
				'rate' /* [0] */,
				'active',
				'deleted',
				'name' /* [3] */
			],
			[3],
			[],
			[0, 3])
	}
}

@Injectable()
export class TranslatedConfigurationService extends AbstractService<TranslatedConfiguration> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'translated_configuration', 'translated_configurations',
			[
				'value' /* [0] */,
				'date_add',
				'date_upd',
				'name' /* [3] */,
				'id_shop_group',
				'id_shop'
			],
			[0],
			[],
			[3])
	}
}

@Injectable()
export class WarehouseProductLocationService extends AbstractService<WarehouseProductLocation> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'warehouse_product_location', 'warehouse_product_locations',
			[
				'id_product' /* [0] */,
				'id_product_attribute' /* [1] */,
				'id_warehouse' /* [2] */,
				'location'
			],
			[],
			[],
			[0, 1, 2])
	}
}

@Injectable()
export class WarehouseService extends AbstractService<Warehouse> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'warehouse', 'warehouses',
			[
				'id_address' /* [0] */,
				'id_employee' /* [1] */,
				'id_currency' /* [2] */,
				'valuation' /* [3] */,
				'deleted',
				'reference' /* [5] */,
				'name' /* [6] */,
				'management_type' /* [7] */
			],
			[],
			[3],
			[0, 1, 2, 5, 6, 7])
	}
}

@Injectable()
export class WeightRangeService extends AbstractService<WeightRange> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'weight_range', 'weight_ranges',
			[
				'id_carrier' /* [0] */,
				'delimiter1' /* [1] */,
				'delimiter2' /* [2] */
			],
			[],
			[],
			[0, 1, 2])
	}
}

@Injectable()
export class ZoneService extends AbstractService<Zone> {
	constructor(http: Http, apiService: APIService) {
		super(
			http, apiService, 'zone', 'zones',
			[
				'name' /* [0] */,
				'active'
			],
			[],
			[],
			[0])
	}
}

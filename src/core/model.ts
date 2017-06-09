export interface PSObject {
	id: string | null
}				
				
export interface Address extends PSObject {
	id_customer?: string | null
	id_manufacturer?: string | null
	id_supplier?: string | null
	id_warehouse?: string | null
	id_country?: string | null
	id_state?: string | null
	alias?: string | null
	company?: string | null
	lastname?: string | null
	firstname?: string | null
	vat_number?: string | null
	address1?: string | null
	address2?: string | null
	postcode?: string | null
	city?: string | null
	other?: string | null
	phone?: string | null
	phone_mobile?: string | null
	dni?: string | null
	deleted?: string | null
	date_add?: string | null
	date_upd?: string | null
}				
				
export interface Carrier extends PSObject {
	deleted?: string | null
	is_module?: string | null
	id_tax_rules_group?: string | null
	id_reference?: string | null
	name?: string | null
	active?: string | null
	is_free?: string | null
	url?: string | null
	shipping_handling?: string | null
	shipping_external?: string | null
	range_behavior?: string | null
	shipping_method?: string | null
	max_width?: string | null
	max_height?: string | null
	max_depth?: string | null
	max_weight?: string | null
	grade?: string | null
	external_module_name?: string | null
	need_range?: string | null
	position?: string | null
	delay?: string | null
}				
				
export interface CartRule extends PSObject {
	id_customer?: string | null
	date_from?: string | null
	date_to?: string | null
	description?: string | null
	quantity?: string | null
	quantity_per_user?: string | null
	priority?: string | null
	partial_use?: string | null
	code?: string | null
	minimum_amount?: string | null
	minimum_amount_tax?: string | null
	minimum_amount_currency?: string | null
	minimum_amount_shipping?: string | null
	country_restriction?: string | null
	carrier_restriction?: string | null
	group_restriction?: string | null
	cart_rule_restriction?: string | null
	product_restriction?: string | null
	shop_restriction?: string | null
	free_shipping?: string | null
	reduction_percent?: string | null
	reduction_amount?: string | null
	reduction_tax?: string | null
	reduction_currency?: string | null
	reduction_product?: string | null
	gift_product?: string | null
	gift_product_attribute?: string | null
	highlight?: string | null
	active?: string | null
	date_add?: string | null
	date_upd?: string | null
	name?: string | null
}				
				
export interface Cart extends PSObject {
	id_address_delivery?: string | null
	id_address_invoice?: string | null
	id_currency?: string | null
	id_customer?: string | null
	id_guest?: string | null
	id_lang?: string | null
	id_shop_group?: string | null
	id_shop?: string | null
	id_carrier?: string | null
	recyclable?: string | null
	gift?: string | null
	gift_message?: string | null
	mobile_theme?: string | null
	delivery_option?: string | null
	secure_key?: string | null
	allow_seperated_package?: string | null
	date_add?: string | null
	date_upd?: string | null
	
	associations?: {
		cart_rows: {
			id_product: string,
			id_product_attribute: string,
			id_address_delivery: string,
			quantity: string
		}[]
	}
}				
				
export interface Category extends PSObject {
	id_parent?: string | null
	level_depth?: string | null
	nb_products_recursive?: string | null
	active?: string | null
	id_shop_default?: string | null
	is_root_category?: string | null
	position?: string | null
	date_add?: string | null
	date_upd?: string | null
	name?: string | null
	link_rewrite?: string | null
	description?: string | null
	meta_title?: string | null
	meta_description?: string | null
	meta_keywords?: string | null
	
	associations?: {
		categories: {id: string}[],
		products: {id: string}[]
	}
}				
				
export interface Combination extends PSObject {
	id_product?: string | null
	location?: string | null
	ean13?: string | null
	upc?: string | null
	quantity?: string | null
	reference?: string | null
	supplier_reference?: string | null
	wholesale_price?: string | null
	price?: string | null
	ecotax?: string | null
	weight?: string | null
	unit_price_impact?: string | null
	minimal_quantity?: string | null
	default_on?: string | null
	available_date?: string | null
	
	associations?: {
		product_option_values: {id: string}[],
		images: {id: string}[]
	}
}				
				
export interface Configuration extends PSObject {
	value?: string | null
	name?: string | null
	id_shop_group?: string | null
	id_shop?: string | null
	date_add?: string | null
	date_upd?: string | null
}				
				
export interface Contact extends PSObject {
	email?: string | null
	customer_service?: string | null
	name?: string | null
	description?: string | null
}				
				
export interface Content extends PSObject {
	id_cms_category?: string | null
	position?: string | null
	indexation?: string | null
	active?: string | null
	meta_description?: string | null
	meta_keywords?: string | null
	meta_title?: string | null
	link_rewrite?: string | null
	content?: string | null
}				
				
export interface Country extends PSObject {
	id_zone?: string | null
	id_currency?: string | null
	call_prefix?: string | null
	iso_code?: string | null
	active?: string | null
	contains_states?: string | null
	need_identification_number?: string | null
	need_zip_code?: string | null
	zip_code_format?: string | null
	display_tax_label?: string | null
	name?: string | null
}				
				
export interface Currency extends PSObject {
	name?: string | null
	iso_code?: string | null
	iso_code_num?: string | null
	blank?: string | null
	sign?: string | null
	format?: string | null
	decimals?: string | null
	conversion_rate?: string | null
	deleted?: string | null
	active?: string | null
}				
				
export interface CustomerMessage extends PSObject {
	id_employee?: string | null
	id_customer_thread?: string | null
	ip_address?: string | null
	message?: string | null
	file_name?: string | null
	user_agent?: string | null
	ps_private?: string | null
	date_add?: string | null
	date_upd?: string | null
	read?: string | null
}				
				
export interface CustomerThread extends PSObject {
	id_lang?: string | null
	id_shop?: string | null
	id_customer?: string | null
	id_order?: string | null
	id_product?: string | null
	id_contact?: string | null
	email?: string | null
	token?: string | null
	status?: string | null
	date_add?: string | null
	date_upd?: string | null
	
	associations?: {
		customer_messages: {id: string}[]
	}
}				
				
export interface Customer extends PSObject {
	id_default_group?: string | null
	id_lang?: string | null
	newsletter_date_add?: string | null
	ip_registration_newsletter?: string | null
	last_passwd_gen?: string | null
	secure_key?: string | null
	deleted?: string | null
	passwd?: string | null
	lastname?: string | null
	firstname?: string | null
	email?: string | null
	id_gender?: string | null
	birthday?: string | null
	newsletter?: string | null
	optin?: string | null
	website?: string | null
	company?: string | null
	siret?: string | null
	ape?: string | null
	outstanding_allow_amount?: string | null
	show_public_prices?: string | null
	id_risk?: string | null
	max_payment_days?: string | null
	active?: string | null
	note?: string | null
	is_guest?: string | null
	id_shop?: string | null
	id_shop_group?: string | null
	date_add?: string | null
	date_upd?: string | null
	
	associations?: {
		groups: {id: string}[]
	}
}				
				
export interface Customization extends PSObject {
	id_address_delivery?: string | null
	id_cart?: string | null
	id_product?: string | null
	id_product_attribute?: string | null
	quantity?: string | null
	quantity_refunded?: string | null
	quantity_returned?: string | null
	in_cart?: string | null
	
	associations?: {
		customized_data_text_fields: {
			id_customization_field: string,
			value: string
		}[],
		customized_data_images: {
			id_customization_field: string,
			value: string
		}[]
	}
}				
				
export interface Delivery extends PSObject {
	id_carrier?: string | null
	id_range_price?: string | null
	id_range_weight?: string | null
	id_zone?: string | null
	id_shop?: string | null
	id_shop_group?: string | null
	price?: string | null
}				
				
export interface Employee extends PSObject {
	id_lang?: string | null
	last_passwd_gen?: string | null
	stats_date_from?: string | null
	stats_date_to?: string | null
	stats_compare_from?: string | null
	stats_compare_to?: string | null
	passwd?: string | null
	lastname?: string | null
	firstname?: string | null
	email?: string | null
	active?: string | null
	optin?: string | null
	id_profile?: string | null
	bo_color?: string | null
	default_tab?: string | null
	bo_theme?: string | null
	bo_css?: string | null
	bo_width?: string | null
	bo_menu?: string | null
	stats_compare_option?: string | null
	preselect_date_range?: string | null
	id_last_order?: string | null
	id_last_customer_message?: string | null
	id_last_customer?: string | null
}				
				
export interface Group extends PSObject {
	reduction?: string | null
	price_display_method?: string | null
	show_prices?: string | null
	date_add?: string | null
	date_upd?: string | null
	name?: string | null
}				
				
export interface Guest extends PSObject {
	id_customer?: string | null
	id_operating_system?: string | null
	id_web_browser?: string | null
	javascript?: string | null
	screen_resolution_x?: string | null
	screen_resolution_y?: string | null
	screen_color?: string | null
	sun_java?: string | null
	adobe_flash?: string | null
	adobe_director?: string | null
	apple_quicktime?: string | null
	real_player?: string | null
	windows_media?: string | null
	accept_language?: string | null
	mobile_theme?: string | null
}				
				
export interface ImageType extends PSObject {
	name?: string | null
	width?: string | null
	height?: string | null
	categories?: string | null
	products?: string | null
	manufacturers?: string | null
	suppliers?: string | null
	scenes?: string | null
	stores?: string | null
}				
				
export interface Language extends PSObject {
	name?: string | null
	iso_code?: string | null
	language_code?: string | null
	active?: string | null
	is_rtl?: string | null
	date_format_lite?: string | null
	date_format_full?: string | null
}				
				
export interface Manufacturer extends PSObject {
	active?: string | null
	link_rewrite?: string | null
	name?: string | null
	date_add?: string | null
	date_upd?: string | null
	description?: string | null
	short_description?: string | null
	meta_title?: string | null
	meta_description?: string | null
	meta_keywords?: string | null
	
	associations?: {
		addresses: {id: string}[]
	}
}				
				
export interface OrderCarrier extends PSObject {
	id_order?: string | null
	id_carrier?: string | null
	id_order_invoice?: string | null
	weight?: string | null
	shipping_cost_tax_excl?: string | null
	shipping_cost_tax_incl?: string | null
	tracking_number?: string | null
	date_add?: string | null
}				
				
export interface OrderDetail extends PSObject {
	id_order?: string | null
	product_id?: string | null
	product_attribute_id?: string | null
	product_quantity_reinjected?: string | null
	group_reduction?: string | null
	discount_quantity_applied?: string | null
	download_hash?: string | null
	download_deadline?: string | null
	id_order_invoice?: string | null
	id_warehouse?: string | null
	id_shop?: string | null
	product_name?: string | null
	product_quantity?: string | null
	product_quantity_in_stock?: string | null
	product_quantity_return?: string | null
	product_quantity_refunded?: string | null
	product_price?: string | null
	reduction_percent?: string | null
	reduction_amount?: string | null
	reduction_amount_tax_incl?: string | null
	reduction_amount_tax_excl?: string | null
	product_quantity_discount?: string | null
	product_ean13?: string | null
	product_upc?: string | null
	product_reference?: string | null
	product_supplier_reference?: string | null
	product_weight?: string | null
	tax_computation_method?: string | null
	id_tax_rules_group?: string | null
	ecotax?: string | null
	ecotax_tax_rate?: string | null
	download_nb?: string | null
	unit_price_tax_incl?: string | null
	unit_price_tax_excl?: string | null
	total_price_tax_incl?: string | null
	total_price_tax_excl?: string | null
	total_shipping_price_tax_excl?: string | null
	total_shipping_price_tax_incl?: string | null
	purchase_supplier_price?: string | null
	original_product_price?: string | null
	original_wholesale_price?: string | null
	
	associations?: {
		taxes: {id: string}[]
	}
}				
				
export interface OrderCartRule extends PSObject {
	id_order?: string | null
	id_cart_rule?: string | null
	id_order_invoice?: string | null
	name?: string | null
	value?: string | null
	value_tax_excl?: string | null
	free_shipping?: string | null
}				
				
export interface OrderHistory extends PSObject {
	id_employee?: string | null
	id_order_state?: string | null
	id_order?: string | null
	date_add?: string | null
}				
				
export interface OrderInvoice extends PSObject {
	id_order?: string | null
	number?: string | null
	delivery_number?: string | null
	delivery_date?: string | null
	total_discount_tax_excl?: string | null
	total_discount_tax_incl?: string | null
	total_paid_tax_excl?: string | null
	total_paid_tax_incl?: string | null
	total_products?: string | null
	total_products_wt?: string | null
	total_shipping_tax_excl?: string | null
	total_shipping_tax_incl?: string | null
	shipping_tax_computation_method?: string | null
	total_wrapping_tax_excl?: string | null
	total_wrapping_tax_incl?: string | null
	shop_address?: string | null
	invoice_address?: string | null
	delivery_address?: string | null
	note?: string | null
	date_add?: string | null
}				
				
export interface OrderPayment extends PSObject {
	order_reference?: string | null
	id_currency?: string | null
	amount?: string | null
	payment_method?: string | null
	conversion_rate?: string | null
	transaction_id?: string | null
	card_number?: string | null
	card_brand?: string | null
	card_expiration?: string | null
	card_holder?: string | null
	date_add?: string | null
}				
				
export interface OrderSlip extends PSObject {
	id_customer?: string | null
	id_order?: string | null
	conversion_rate?: string | null
	total_products_tax_excl?: string | null
	total_products_tax_incl?: string | null
	total_shipping_tax_excl?: string | null
	total_shipping_tax_incl?: string | null
	amount?: string | null
	shipping_cost?: string | null
	shipping_cost_amount?: string | null
	partial?: string | null
	date_add?: string | null
	date_upd?: string | null
	order_slip_type?: string | null
	
	associations?: {
		order_slip_details: {
			id: string,
			id_order_detail: string,
			product_quantity: string,
			amount_tax_excl: string,
			amount_tax_incl: string
		}[]
	}
}				
				
export interface OrderState extends PSObject {
	unremovable?: string | null
	delivery?: string | null
	hidden?: string | null
	send_email?: string | null
	module_name?: string | null
	invoice?: string | null
	color?: string | null
	logable?: string | null
	shipped?: string | null
	paid?: string | null
	pdf_delivery?: string | null
	pdf_invoice?: string | null
	deleted?: string | null
	name?: string | null
	template?: string | null
}				
				
export interface Order extends PSObject {
	id_address_delivery?: string | null
	id_address_invoice?: string | null
	id_cart?: string | null
	id_currency?: string | null
	id_lang?: string | null
	id_customer?: string | null
	id_carrier?: string | null
	current_state?: string | null
	module?: string | null
	invoice_number?: string | null
	invoice_date?: string | null
	delivery_number?: string | null
	delivery_date?: string | null
	valid?: string | null
	date_add?: string | null
	date_upd?: string | null
	shipping_number?: string | null
	id_shop_group?: string | null
	id_shop?: string | null
	secure_key?: string | null
	payment?: string | null
	recyclable?: string | null
	gift?: string | null
	gift_message?: string | null
	mobile_theme?: string | null
	total_discounts?: string | null
	total_discounts_tax_incl?: string | null
	total_discounts_tax_excl?: string | null
	total_paid?: string | null
	total_paid_tax_incl?: string | null
	total_paid_tax_excl?: string | null
	total_paid_real?: string | null
	total_products?: string | null
	total_products_wt?: string | null
	total_shipping?: string | null
	total_shipping_tax_incl?: string | null
	total_shipping_tax_excl?: string | null
	carrier_tax_rate?: string | null
	total_wrapping?: string | null
	total_wrapping_tax_incl?: string | null
	total_wrapping_tax_excl?: string | null
	round_mode?: string | null
	round_type?: string | null
	conversion_rate?: string | null
	reference?: string | null
	
	associations?: {
		order_rows: {
			id: string,
			product_id: string,
			product_attribute_id: string,
			product_quantity: string,
			product_name: string,
			product_reference: string,
			product_ean13: string,
			product_upc: string,
			product_price: string,
			unit_price_tax_incl: string,
			unit_price_tax_excl: string
		}[]
	}
}				
				
export interface PriceRange extends PSObject {
	id_carrier?: string | null
	delimiter1?: string | null
	delimiter2?: string | null
}				
				
export interface CustomizationField extends PSObject {
	id_product?: string | null
	type?: string | null
	required?: string | null
	name?: string | null
}				
				
export interface ProductFeatureValue extends PSObject {
	id_feature?: string | null
	custom?: string | null
	value?: string | null
}				
				
export interface ProductFeature extends PSObject {
	position?: string | null
	name?: string | null
}				
				
export interface ProductOptionValue extends PSObject {
	id_attribute_group?: string | null
	color?: string | null
	position?: string | null
	name?: string | null
}				
				
export interface ProductOption extends PSObject {
	is_color_group?: string | null
	group_type?: string | null
	position?: string | null
	name?: string | null
	public_name?: string | null
	
	associations?: {
		product_option_values: {id: string}[]
	}
}				
				
export interface ProductSupplier extends PSObject {
	id_product?: string | null
	id_product_attribute?: string | null
	id_supplier?: string | null
	id_currency?: string | null
	product_supplier_reference?: string | null
	product_supplier_price_te?: string | null
}				
				
export interface Product extends PSObject {
	id_manufacturer?: string | null
	id_supplier?: string | null
	id_category_default?: string | null
	ps_new?: string | null
	cache_default_attribute?: string | null
	id_default_image?: string | null
	id_default_combination?: string | null
	id_tax_rules_group?: string | null
	position_in_category?: string | null
	manufacturer_name?: string | null
	quantity?: string | null
	type?: string | null
	id_shop_default?: string | null
	reference?: string | null
	supplier_reference?: string | null
	location?: string | null
	width?: string | null
	height?: string | null
	depth?: string | null
	weight?: string | null
	quantity_discount?: string | null
	ean13?: string | null
	upc?: string | null
	cache_is_pack?: string | null
	cache_has_attachments?: string | null
	is_virtual?: string | null
	on_sale?: string | null
	online_only?: string | null
	ecotax?: string | null
	minimal_quantity?: string | null
	price?: string | null
	wholesale_price?: string | null
	unity?: string | null
	unit_price_ratio?: string | null
	additional_shipping_cost?: string | null
	customizable?: string | null
	text_fields?: string | null
	uploadable_files?: string | null
	active?: string | null
	redirect_type?: string | null
	id_product_redirected?: string | null
	available_for_order?: string | null
	available_date?: string | null
	condition?: string | null
	show_price?: string | null
	indexed?: string | null
	visibility?: string | null
	advanced_stock_management?: string | null
	date_add?: string | null
	date_upd?: string | null
	pack_stock_type?: string | null
	meta_description?: string | null
	meta_keywords?: string | null
	meta_title?: string | null
	link_rewrite?: string | null
	name?: string | null
	description?: string | null
	description_short?: string | null
	available_now?: string | null
	available_later?: string | null
	
	associations?: {
		categories: {id: string}[],
		images: {id: string}[],
		combinations: {id: string}[],
		product_option_values: {id: string}[],
		product_features: {
			id: string,
			id_feature_value: string
		}[],
		tags: {id: string}[],
		stock_availables: {
			id: string,
			id_product_attribute: string
		}[],
		accessories: {id: string}[],
		product_bundle: {
			id: string,
			quantity: string
		}[]
	}
}				
				
export interface ShopGroup extends PSObject {
	name?: string | null
	share_customer?: string | null
	share_order?: string | null
	share_stock?: string | null
	active?: string | null
	deleted?: string | null
}				
				
export interface ShopUrl extends PSObject {
	id_shop?: string | null
	active?: string | null
	main?: string | null
	domain?: string | null
	domain_ssl?: string | null
	physical_uri?: string | null
	virtual_uri?: string | null
}				
				
export interface Shop extends PSObject {
	id_shop_group?: string | null
	id_category?: string | null
	id_theme?: string | null
	active?: string | null
	deleted?: string | null
	name?: string | null
}				
				
export interface SpecificPriceRule extends PSObject {
	id_shop?: string | null
	id_country?: string | null
	id_currency?: string | null
	id_group?: string | null
	name?: string | null
	from_quantity?: string | null
	price?: string | null
	reduction?: string | null
	reduction_tax?: string | null
	reduction_type?: string | null
	from?: string | null
	to?: string | null
}				
				
export interface SpecificPrice extends PSObject {
	id_shop_group?: string | null
	id_shop?: string | null
	id_cart?: string | null
	id_product?: string | null
	id_product_attribute?: string | null
	id_currency?: string | null
	id_country?: string | null
	id_group?: string | null
	id_customer?: string | null
	id_specific_price_rule?: string | null
	price?: string | null
	from_quantity?: string | null
	reduction?: string | null
	reduction_tax?: string | null
	reduction_type?: string | null
	from?: string | null
	to?: string | null
}				
				
export interface State extends PSObject {
	id_zone?: string | null
	id_country?: string | null
	iso_code?: string | null
	name?: string | null
	active?: string | null
}				
				
export interface StockAvailable extends PSObject {
	id_product?: string | null
	id_product_attribute?: string | null
	id_shop?: string | null
	id_shop_group?: string | null
	quantity?: string | null
	depends_on_stock?: string | null
	out_of_stock?: string | null
}				
				
export interface StockMovementReason extends PSObject {
	sign?: string | null
	deleted?: string | null
	date_add?: string | null
	date_upd?: string | null
	name?: string | null
}				
				
export interface StockMvt extends PSObject {
	id_product?: string | null
	id_product_attribute?: string | null
	id_warehouse?: string | null
	id_currency?: string | null
	management_type?: string | null
	id_employee?: string | null
	id_stock?: string | null
	id_stock_mvt_reason?: string | null
	id_order?: string | null
	id_supply_order?: string | null
	product_name?: string | null
	ean13?: string | null
	upc?: string | null
	reference?: string | null
	physical_quantity?: string | null
	sign?: string | null
	last_wa?: string | null
	current_wa?: string | null
	price_te?: string | null
	date_add?: string | null
}				
				
export interface Stock extends PSObject {
	id_warehouse?: string | null
	id_product?: string | null
	id_product_attribute?: string | null
	real_quantity?: string | null
	reference?: string | null
	ean13?: string | null
	upc?: string | null
	physical_quantity?: string | null
	usable_quantity?: string | null
	price_te?: string | null
}				
				
export interface Store extends PSObject {
	id_country?: string | null
	id_state?: string | null
	hours?: string | null
	name?: string | null
	address1?: string | null
	address2?: string | null
	postcode?: string | null
	city?: string | null
	latitude?: string | null
	longitude?: string | null
	phone?: string | null
	fax?: string | null
	note?: string | null
	email?: string | null
	active?: string | null
	date_add?: string | null
	date_upd?: string | null
}				
				
export interface Supplier extends PSObject {
	link_rewrite?: string | null
	name?: string | null
	active?: string | null
	date_add?: string | null
	date_upd?: string | null
	description?: string | null
	meta_title?: string | null
	meta_description?: string | null
	meta_keywords?: string | null
}				
				
export interface SupplyOrderDetail extends PSObject {
	id_supply_order?: string | null
	id_product?: string | null
	id_product_attribute?: string | null
	reference?: string | null
	supplier_reference?: string | null
	name?: string | null
	ean13?: string | null
	upc?: string | null
	exchange_rate?: string | null
	unit_price_te?: string | null
	quantity_expected?: string | null
	quantity_received?: string | null
	price_te?: string | null
	discount_rate?: string | null
	discount_value_te?: string | null
	price_with_discount_te?: string | null
	tax_rate?: string | null
	tax_value?: string | null
	price_ti?: string | null
	tax_value_with_order_discount?: string | null
	price_with_order_discount_te?: string | null
}				
				
export interface SupplyOrderHistory extends PSObject {
	id_supply_order?: string | null
	id_employee?: string | null
	id_state?: string | null
	employee_firstname?: string | null
	employee_lastname?: string | null
	date_add?: string | null
}				
				
export interface SupplyOrderReceiptHistory extends PSObject {
	id_supply_order_detail?: string | null
	id_employee?: string | null
	id_supply_order_state?: string | null
	employee_firstname?: string | null
	employee_lastname?: string | null
	quantity?: string | null
	date_add?: string | null
}				
				
export interface SupplyOrderState extends PSObject {
	delivery_note?: string | null
	editable?: string | null
	receipt_state?: string | null
	pending_receipt?: string | null
	enclosed?: string | null
	color?: string | null
	name?: string | null
}				
				
export interface SupplyOrder extends PSObject {
	id_supplier?: string | null
	id_lang?: string | null
	id_warehouse?: string | null
	id_supply_order_state?: string | null
	id_currency?: string | null
	supplier_name?: string | null
	reference?: string | null
	date_delivery_expected?: string | null
	total_te?: string | null
	total_with_discount_te?: string | null
	total_ti?: string | null
	total_tax?: string | null
	discount_rate?: string | null
	discount_value_te?: string | null
	is_template?: string | null
	date_add?: string | null
	date_upd?: string | null
	
	associations?: {
		supply_order_details: {
			id: string,
			id_product: string,
			id_product_attribute: string,
			supplier_reference: string,
			product_name: string
		}[]
	}
}				
				
export interface Tag extends PSObject {
	id_lang?: string | null
	name?: string | null
}				
				
export interface TaxRuleGroup extends PSObject {
	name?: string | null
	active?: string | null
	deleted?: string | null
	date_add?: string | null
	date_upd?: string | null
}				
				
export interface TaxRule extends PSObject {
	id_tax_rules_group?: string | null
	id_state?: string | null
	id_country?: string | null
	zipcode_from?: string | null
	zipcode_to?: string | null
	id_tax?: string | null
	behavior?: string | null
	description?: string | null
}				
				
export interface Tax extends PSObject {
	rate?: string | null
	active?: string | null
	deleted?: string | null
	name?: string | null
}				
				
export interface TranslatedConfiguration extends PSObject {
	value?: string | null
	date_add?: string | null
	date_upd?: string | null
	name?: string | null
	id_shop_group?: string | null
	id_shop?: string | null
}				
				
export interface WarehouseProductLocation extends PSObject {
	id_product?: string | null
	id_product_attribute?: string | null
	id_warehouse?: string | null
	location?: string | null
}				
				
export interface Warehouse extends PSObject {
	id_address?: string | null
	id_employee?: string | null
	id_currency?: string | null
	valuation?: string | null
	deleted?: string | null
	reference?: string | null
	name?: string | null
	management_type?: string | null
	
	associations?: {
		stocks: {id: string}[],
		carriers: {id: string}[],
		shops: {
			id: string,
			name: string
		}[]
	}
}				
				
export interface WeightRange extends PSObject {
	id_carrier?: string | null
	delimiter1?: string | null
	delimiter2?: string | null
}				
				
export interface Zone extends PSObject {
	name?: string | null
	active?: string | null
}
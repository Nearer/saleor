/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ProductImageCreate
// ====================================================

export interface ProductImageCreate_productImageCreate_errors {
  __typename: "Error";
  field: string | null;
  message: string | null;
}

export interface ProductImageCreate_productImageCreate_product_category {
  __typename: "Category";
  id: string;
  name: string;
}

export interface ProductImageCreate_productImageCreate_product_collections_edges_node {
  __typename: "Collection";
  id: string;
  name: string;
}

export interface ProductImageCreate_productImageCreate_product_collections_edges {
  __typename: "CollectionCountableEdge";
  node: ProductImageCreate_productImageCreate_product_collections_edges_node;
}

export interface ProductImageCreate_productImageCreate_product_collections {
  __typename: "CollectionCountableConnection";
  edges: ProductImageCreate_productImageCreate_product_collections_edges[];
}

export interface ProductImageCreate_productImageCreate_product_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductImageCreate_productImageCreate_product_margin {
  __typename: "Margin";
  start: number | null;
  stop: number | null;
}

export interface ProductImageCreate_productImageCreate_product_purchaseCost_start {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductImageCreate_productImageCreate_product_purchaseCost_stop {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductImageCreate_productImageCreate_product_purchaseCost {
  __typename: "MoneyRange";
  start: ProductImageCreate_productImageCreate_product_purchaseCost_start | null;
  stop: ProductImageCreate_productImageCreate_product_purchaseCost_stop | null;
}

export interface ProductImageCreate_productImageCreate_product_attributes_attribute_values {
  __typename: "ProductAttributeValue";
  name: string | null;
  slug: string | null;
}

export interface ProductImageCreate_productImageCreate_product_attributes_attribute {
  __typename: "ProductAttribute";
  id: string;
  slug: string | null;
  name: string | null;
  values: (ProductImageCreate_productImageCreate_product_attributes_attribute_values | null)[] | null;
}

export interface ProductImageCreate_productImageCreate_product_attributes_value {
  __typename: "ProductAttributeValue";
  id: string;
  name: string | null;
  slug: string | null;
}

export interface ProductImageCreate_productImageCreate_product_attributes {
  __typename: "SelectedAttribute";
  attribute: ProductImageCreate_productImageCreate_product_attributes_attribute | null;
  value: ProductImageCreate_productImageCreate_product_attributes_value | null;
}

export interface ProductImageCreate_productImageCreate_product_availability_priceRange_start_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductImageCreate_productImageCreate_product_availability_priceRange_start {
  __typename: "TaxedMoney";
  net: ProductImageCreate_productImageCreate_product_availability_priceRange_start_net;
}

export interface ProductImageCreate_productImageCreate_product_availability_priceRange_stop_net {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductImageCreate_productImageCreate_product_availability_priceRange_stop {
  __typename: "TaxedMoney";
  net: ProductImageCreate_productImageCreate_product_availability_priceRange_stop_net;
}

export interface ProductImageCreate_productImageCreate_product_availability_priceRange {
  __typename: "TaxedMoneyRange";
  start: ProductImageCreate_productImageCreate_product_availability_priceRange_start | null;
  stop: ProductImageCreate_productImageCreate_product_availability_priceRange_stop | null;
}

export interface ProductImageCreate_productImageCreate_product_availability {
  __typename: "ProductAvailability";
  available: boolean | null;
  priceRange: ProductImageCreate_productImageCreate_product_availability_priceRange | null;
}

export interface ProductImageCreate_productImageCreate_product_images_edges_node {
  __typename: "ProductImage";
  id: string;
  alt: string;
  sortOrder: number;
  url: string;
}

export interface ProductImageCreate_productImageCreate_product_images_edges {
  __typename: "ProductImageCountableEdge";
  node: ProductImageCreate_productImageCreate_product_images_edges_node;
}

export interface ProductImageCreate_productImageCreate_product_images {
  __typename: "ProductImageCountableConnection";
  edges: ProductImageCreate_productImageCreate_product_images_edges[];
}

export interface ProductImageCreate_productImageCreate_product_variants_edges_node_priceOverride {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductImageCreate_productImageCreate_product_variants_edges_node {
  __typename: "ProductVariant";
  id: string;
  sku: string;
  name: string;
  priceOverride: ProductImageCreate_productImageCreate_product_variants_edges_node_priceOverride | null;
  stockQuantity: number;
  margin: number | null;
}

export interface ProductImageCreate_productImageCreate_product_variants_edges {
  __typename: "ProductVariantCountableEdge";
  node: ProductImageCreate_productImageCreate_product_variants_edges_node;
}

export interface ProductImageCreate_productImageCreate_product_variants {
  __typename: "ProductVariantCountableConnection";
  edges: ProductImageCreate_productImageCreate_product_variants_edges[];
}

export interface ProductImageCreate_productImageCreate_product_productType {
  __typename: "ProductType";
  id: string;
  name: string;
  hasVariants: boolean;
}

export interface ProductImageCreate_productImageCreate_product {
  __typename: "Product";
  id: string;
  name: string;
  description: string;
  seoTitle: string | null;
  seoDescription: string | null;
  category: ProductImageCreate_productImageCreate_product_category;
  collections: ProductImageCreate_productImageCreate_product_collections | null;
  price: ProductImageCreate_productImageCreate_product_price | null;
  margin: ProductImageCreate_productImageCreate_product_margin | null;
  purchaseCost: ProductImageCreate_productImageCreate_product_purchaseCost | null;
  isPublished: boolean;
  chargeTaxes: boolean;
  availableOn: any | null;
  attributes: (ProductImageCreate_productImageCreate_product_attributes | null)[] | null;
  availability: ProductImageCreate_productImageCreate_product_availability | null;
  images: ProductImageCreate_productImageCreate_product_images | null;
  variants: ProductImageCreate_productImageCreate_product_variants | null;
  productType: ProductImageCreate_productImageCreate_product_productType;
  url: string;
}

export interface ProductImageCreate_productImageCreate {
  __typename: "ProductImageCreate";
  errors: (ProductImageCreate_productImageCreate_errors | null)[] | null;
  product: ProductImageCreate_productImageCreate_product | null;
}

export interface ProductImageCreate {
  productImageCreate: ProductImageCreate_productImageCreate | null;
}

export interface ProductImageCreateVariables {
  product: string;
  image: any;
  alt?: string | null;
}

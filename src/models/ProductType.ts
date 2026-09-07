export interface metaItem {
	createdAt: string;
	qrCode: string;
	barcode: string;
	updatedAt: string;
}

export interface dimensionsItem {
	depth: number;
	width: number;
	height: number;
}

export type ProductType= {
	thumbnail: string;
	minimumOrderQuantity: number;
	rating: number;
	returnPolicy: string;
	description: string;
	weight: number;
	warrantyInformation: string;
	title: string;
	discountPercentage: number;
	price: number;
	meta: metaItem;
	shippingInformation: string;
	id: number;
	availabilityStatus: string;
	category: string;
	stock: number;
	sku: string;
	brand: string;
	dimensions: dimensionsItem;
}
export type ProductResponseType={
    product:ProductType[];
    total:number;
    skip:number;
    limit:number;
}

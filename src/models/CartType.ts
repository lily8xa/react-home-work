export type ProductType ={
	discountPercentage: number;
	discountedTotal: number;
	total: number;
	thumbnail: string;
	quantity: number;
	price: number;
	id: number;
	title: string;
}
export type CartType={
    id:number,
    products:ProductType[];
    total:number,
    discountedTotal:number,
    userId: number,
    totalProducts:number,
    totalQuantity:number,
}
export type DummyCartType={
    carts:CartType[];
    total:number;
    skip:number;
    limit:number;
}

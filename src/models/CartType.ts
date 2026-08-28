export type ProductsType ={
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
    id:number;
    products:ProductsType[];
    total:number,
    discountedTotal:number
    userId:number,
    totalProducts:number,
    totalQuantity:number,
}

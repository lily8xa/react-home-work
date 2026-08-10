type ReviewsType={
    rating:number;
    comment:string;
    date:string;
    reviewerName:string;
    reviewerEmail:string;
}
type DimensionsType={
    width:number;
    height:number;
    depth:number;
}
type MetaType={
    createdAt:string;
    updatedAt:string;
    barcode:string;
    qrCode:string;
}
export type ProductsType={
    id:number;
    title:string;
    description:string;
    category:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    tags:string[];
    brand:string;
    sku:string;
    weight:number;
    dimensions:DimensionsType;
    warrantyInformation:string;
    shippingInformation:string;
    availabilityStatus:string;
    reviews:ReviewsType[];
    returnPolicy:string;
    minimumOrderQuantity:number;
    meta:MetaType;
    images:string[];
    thumbnail:string;
}

import type {FC} from "react";
import type {ProductsType} from "../../models/Products.ts";
import './Product.css'
export const Product:FC<ProductsType> =
    ({id,title,description,category,price,discountPercentage,rating,stock,
         tags,brand,sku,weight,dimensions,warrantyInformation,shippingInformation,availabilityStatus,
         reviews,returnPolicy,minimumOrderQuantity,meta,thumbnail}) => {
    return (
        <div className={'main-border'}>
            <h1>{id}{title}</h1>
            <p>{description}</p>
            <p>{category}</p>
            <h3>Prise-{price} USD</h3>
            <p>Discount{discountPercentage} %.</p>
            <p>Rating-{rating}. Stock-{stock}</p>
            <ul>{tags.map((tag, index) => (
                <li key={index}>#{tag}</li>))}
            </ul>
            <h3>{brand}</h3>
            <span>{sku}</span>
            <div>
                <h4>Weight{weight}</h4>
                <ul>Dimensions
                    <li>Width-{dimensions.width}</li>
                    <li>Height-{dimensions.height}</li>
                    <li>Depth{dimensions.depth}</li>
                </ul>
            </div>
            <p>{warrantyInformation}</p>
            <p>{shippingInformation}</p>
            <h3>{availabilityStatus}</h3>
            <div>
            <div>Reviews:{reviews.map((review,index)=>(
                <h3 key={index}>{review.rating}. {review.comment}. Date{review.date}</h3>
            ))}</div>
                <div>{reviews.map((review,index)=>(
                    <p key={index}>{review.reviewerName}. {review.reviewerEmail}</p>
                ))}</div>
            </div>
            <p>{returnPolicy}. Minimum Order-{minimumOrderQuantity}</p>
            <div>
                <p>Created-{meta.createdAt}, Updated-{meta.updatedAt}</p>
                <p>Barcode-{meta.barcode}</p>
                <img src={meta.qrCode} alt="qrCode"/>
            </div>
            <div>
                <img src={thumbnail} alt="MiniImage"/>
            </div>
        </div>
    );
};

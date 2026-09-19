import type {FC} from "react";
import type {CarType} from "../../models/CarType.ts";
import './Car.css'

export const Car:FC<CarType> = ({id,brand,year,price}) => {
    return (
        <div className={'main-car'}>
            <h1>{id}-{brand}</h1>
            <p>Year-{year}</p>
            <h3>Prise-{price} USD</h3>
        </div>
    );
};

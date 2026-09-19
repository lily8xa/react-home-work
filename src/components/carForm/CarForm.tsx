import {useForm} from "react-hook-form";
import type {CarType} from "../../models/CarType.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.ts";
import './CarForm.css'

interface CarFormProps {
    onSubmit: (data: CarType) => void;
}
export const CarForm = ({onSubmit}:CarFormProps)=> {
    const {register,handleSubmit,formState:{errors}}=useForm<CarType>({mode:'all',resolver:joiResolver(carValidator)});

    return (
        <div className={'main-form'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Enter brand
                    <input type="text"{...register('brand')}/>
                    <p>{errors.brand?.message}</p>
                </label>
                <label>Enter year
                    <input type="number"{...register('year')}/>
                    <p>{errors.year?.message}</p>
                </label>
                <label>Enter price
                    <input type="number" {...register('price')}/>
                    <p>{errors.price?.message}</p>
                </label>
                <button className={'submit'}>Save car</button>
            </form>
        </div>
    );
};

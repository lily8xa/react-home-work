import {useForm} from "react-hook-form";
import type {CarType} from "../../models/CarType.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.ts";
import './CarForm.css'

interface CarFormProps {
    onSubmit: (data: CarType) => Promise<void> | void;
}
export const CarForm = ({onSubmit}:CarFormProps)=> {
    const {register,handleSubmit,formState:{errors,isValid},reset}=useForm<CarType>({mode:'all',resolver:joiResolver(carValidator)});
    const handleFormSubmit = async (data: CarType) => {
        try {
            await onSubmit(data);
            reset();
        } catch (error) {
            console.error("Помилка відправки форми:", error);
        }
    };
    return (
        <div className={'main-form'}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                <button className={'submit'} disabled={!isValid} >Save car</button>
            </form>
        </div>
    );
};

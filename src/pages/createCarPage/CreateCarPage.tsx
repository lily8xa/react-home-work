import type {CarType} from "../../models/CarType.ts";
import {addCar} from "../../services/api.service.ts";
import {CarForm} from "../../components/carForm/CarForm.tsx";

export const CreateCarPage = () => {
    const createHandler=(data:CarType):void=>{
        addCar(data)
    }
    return (
        <><CarForm onSubmit={createHandler}/></>
    );
};

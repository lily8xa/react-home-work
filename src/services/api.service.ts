import * as axios from "axios";
import type {CarType} from "../models/CarType.ts";

const axiosInstance=axios.create({
    baseURL:'http://bigbird.space/carsAPI/v1',
    headers:{"Content-Type":"application/json"},
}
);
export const getCars=async ():Promise<CarType[]>=>{
    const axiosResponse=await axiosInstance.get<CarType[]>("/cars");
    const cars=axiosResponse.data;
console.log(cars);
return cars;

}
export const addCar=async (car:CarType)=>{
    await axiosInstance.post("/cars",car);
}


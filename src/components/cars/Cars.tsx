import {useEffect, useState} from "react";
import type {CarType} from "../../models/CarType.ts";
import {getCars} from "../../services/api.service.ts";
import {Car} from "../car/Car.tsx";

export const Cars = () => {
    const[cars,setCars]=useState<CarType[]>([])
    useEffect(()=>{
        getCars()
            .then(value => setCars(value))
    },[])
    return (
        <>{cars.map(car =><Car {...car} key={car.id}/> )}</>
    );
};

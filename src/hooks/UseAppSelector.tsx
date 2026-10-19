import {useSelector} from "react-redux";
import type {store} from "../redux/Store.ts";
////створюємо хук для типізації нашого сховища
export const useAppSelector =useSelector.withTypes<ReturnType<typeof store.getState>>();
////useSelector--хук що приймає обєкт зі сховища.withTypes--характеристика яку ми типізуємо.<ReturnType<typeof store.getState>>--беремо тип нашого сховища

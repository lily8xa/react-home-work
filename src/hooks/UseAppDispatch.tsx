import {useDispatch} from "react-redux";
import type {store} from "../redux/Store.ts";
////створюємо власний хук для типізації відправлених екшенів
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()


// dispatch — це спеціальна функція, яка використовується для надсилання (відправки) екшенів (actions) до стору (store).Простими словами,
// це єдиний спосіб в Redux змусити стан (state) вашої програми змінитися.

import {useDispatch} from "react-redux";
import type {store} from "../redux/slices/Store.ts";
////створюємо власний хук для типізації
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()


////що тут означає dispatch/В контексті Redux (та Redux Toolkit), який видно на скріншоті,
// dispatch — це спеціальна функція, яка використовується для надсилання (відправки) екшенів (actions) до стору (store).Простими словами,
// це єдиний спосіб в Redux змусити стан (state) вашої програми змінитися.

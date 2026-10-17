import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./UserSlice.ts";

export const store=configureStore(//////////////створюємо сховище
    {
        reducer://////////////опції сховища
            {userSlice:userSlice.reducer}//////////наша кімната з функцією редусер
    }
)

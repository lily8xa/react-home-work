import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice.ts";
import {postSlice} from "./slices/PostSlice.ts";

export const store=configureStore(//////////////створюємо сховище
    {
        reducer://////////////опції сховища
            {userSlice:userSlice.reducer,
                postSlice:postSlice.reducer
            }

        //////////наша кімната з функцією редусер
    }
)

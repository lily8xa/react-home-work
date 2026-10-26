import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice.ts";
import {postSlice} from "./slices/PostSlice.ts";
import {commentSlice} from "./slices/CommentSllise.ts";

export const store=configureStore(//////////////створюємо сховище
    {
        reducer://////////////опції сховища
            {userSlice:userSlice.reducer,///////кімната користувачів. яка дія reducer таємниця для мене
                postSlice:postSlice.reducer,////////////постів
                commentSlice:commentSlice.reducer/////////////коментарів--доступ до нього через власний хук useAppSelector
            }

        //////////наша кімната з функцією редусер
    }
)

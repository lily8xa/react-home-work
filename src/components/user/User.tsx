import type {FC} from "react";
import type {UserType} from "../../models/UserType.ts";

export const User:FC<UserType> = ({id, name, phone}) => {

    return (
        <div>
            <h1>{id}-{name}</h1>
            <p>Phone-{phone}</p>
        </div>
    );
};

import type {UserType} from "../models/UserType.ts";
import type {FC} from "react";

export const User :FC<UserType> = ({id,name,username,email}) => {
    return (
        <div>
            <h1>{id}-{name}</h1>
            <p>{username} email-{email}</p>
        </div>
    );
};

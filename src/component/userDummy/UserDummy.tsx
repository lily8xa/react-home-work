import type {FC} from "react";
import type {UserDummyType} from "../../models/UsersDummy.ts";

export const UserDummy:FC<UserDummyType> = ({id,firstName,}) => {
    return (
        <div>
            <h1>{id}-{firstName}</h1>
        </div>
    );
};

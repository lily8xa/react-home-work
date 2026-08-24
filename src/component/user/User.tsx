import type {FC} from "react";
import type {UserType} from "../../models/UserType.ts";
import './User.css'

export const User:FC<UserType> = ({id,name,username,email,address,phone,website,company}) => {
    return (
        <div className={'user-main'}>
            <h1>{id} {name} {username}</h1>
            <p>email-{email}</p>
            <p>{address.city}, {address.street}, {address.suite}, {address.zipcode},
            geo-{address.geo.lat}-{address.geo.lng}</p>
            <p>Phone-{phone}</p>
            <p>Web-{website}</p>
            <h3>Company{company.name}, {company.bs}, {company.catchPhrase}</h3>
        </div>
    );
};

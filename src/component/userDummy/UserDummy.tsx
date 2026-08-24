import type {FC} from "react";
import type {UserDummyType} from "../../models/UsersDummy.ts";
import './UserDummy.css'

export const UserDummy:FC<UserDummyType> = ({id,firstName,lastName,maidenName,age,gender,email,phone,username,
                                                password,birthDate,image,bloodGroup,height,weight,eyeColor,hair,
                                                ip,address,macAddress,university,bank,company,ein,ssn,userAgent,
                                                crypto,role}) => {
    return (
        <div className={'main-user-dummy'}>
            <h1>{id}-{firstName} {lastName} {maidenName}</h1>
            <p>Age-{age}. {gender}. {birthDate}</p>
            <p>{email}, phone-{phone},ip-{ip}</p>
            <p>{username}-{password}</p>
            <img src={image} alt="image"/>
            <p>Blood group-{bloodGroup}</p>
            <p>height-{height},weight-{weight}</p>
            <p>Eyes-{eyeColor}</p>
            <p>Hair-{hair.color}, {hair.type}</p>
            <ul>Address
            <li>{address.city}</li>
                <li>{address.address}</li>
                <li>{address.state}. {address.stateCode}</li>
                <li>{address.postalCode}</li>
                <li>coordinates-{address.coordinates.lng}/{address.coordinates.lat}</li>
                <li>{address.country}</li>
            </ul>
            <p>Mac address-{macAddress}</p>
            <p>{university}</p>
            <ul>Bank
                <li>{bank.cardExpire}</li>
                <li>{bank.cardNumber}</li>
                <li>{bank.cardType}</li>
                <li>{bank.iban}</li>
                <li>{bank.currency}</li>
            </ul>
            <ul>Company
                <li>{company.department}</li>
                <li>{company.name}</li>
                <li>{company.title}</li>
                <ul>Address
                    <li>{company.address.country}</li>
                    <li>{company.address.city}</li>
                    <li>{company.address.state}</li>
                    <li>{company.address.stateCode}, {company.address.postalCode}</li>
                    <li>Coordinates-Lat-{company.address.coordinates.lat}/Lng-{company.address.coordinates.lng}</li>
                </ul>
            </ul>
            <p>ein-{ein}. ssn{ssn}</p>
            <p>Agent-{userAgent}</p>
            <ul>Crypto
                <li>Coin-{crypto.coin}</li>
                <li>Wallet-{crypto.wallet}</li>
                <li>{crypto.network}</li>
            </ul>
            <h3>{role}</h3>
        </div>
    );
};

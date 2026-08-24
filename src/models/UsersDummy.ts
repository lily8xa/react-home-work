
export type UserDummyJsonType={
    users:UserDummyType[];
    total:number;
    skip:number;
    limit:number;
}
export interface hairItem {
	color: string;
	type: string;
}

export interface bankItem {
	iban: string;
	cardExpire: string;
	cardType: string;
	currency: string;
	cardNumber: string;
}

export interface addressItem {
	country: string;
	address: string;
	city: string;
	postalCode: string;
	coordinates: coordinatesItem;
	stateCode: string;
	state: string;
}

export interface coordinatesItem {
	lng: number;
	lat: number;
}

export interface companyItem {
	address: addressItem;
	name: string;
	department: string;
	title: string;
}

export interface cryptoItem {
	wallet: string;
	coin: string;
	network: string;
}

export type UserDummyType ={
	lastName: string;
	role: string;
	gender: string;
	university: string;
	maidenName: string;
	ein: string;
	ssn: string;
	bloodGroup: string;
	password: string;
	hair: hairItem;
	bank: bankItem;
	eyeColor: string;
	company: companyItem;
	id: number;
	email: string;
	height: number;
	image: string;
	address: addressItem;
	ip: string;
	weight: number;
	userAgent: string;
	birthDate: string;
	crypto: cryptoItem;
	firstName: string;
	macAddress: string;
	phone: string;
	age: number;
	username: string;
}


export interface geoItem {
	lng: string;
	lat: string;
}

export interface addressItem {
	zipcode: string;
	geo: geoItem;
	suite: string;
	city: string;
	street: string;
}

export interface companyItem {
	bs: string;
	catchPhrase: string;
	name: string;
}

export type UserType ={
	website: string;
	address: addressItem;
	phone: string;
	name: string;
	company: companyItem;
	id: number;
	email: string;
	username: string;
}


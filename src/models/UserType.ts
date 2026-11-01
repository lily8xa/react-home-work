////////////типи полів користувача
export interface geoItem {////////геолокація
	lng: string;//////широта
	lat: string;///////довгота
}

export interface addressItem {/////////адреса
	zipcode: string;//////зіпкод
	geo: geoItem;////згори є
	suite: string;//////штат
	city: string;//////////місто
	street: string;///////вулиця конкретного користувача
}

export interface companyItem {//////дані компанії
	bs: string;
	catchPhrase: string;
	name: string;
}

export type UserType= {////////основний тип
	website: string;//////електронка
	address: addressItem;/////адреса в підтипі
	phone: string;////номер чувачка
	name: string;/////як його кличуть
	company: companyItem;//////де він працює
	id: number;////Унікальний номерок
	email: string;/////куди можна йому відправити ел-лист
	username: string;/////придумав собі кличку на сайті
}


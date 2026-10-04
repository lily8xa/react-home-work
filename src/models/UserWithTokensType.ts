export type UserWithTokensType ={//// тип який отримуємо коли авторизація успішна.
    firstName: string;
	lastName: string;
	image: string;
	gender: string;
	id: number;
	accessToken: string;
	email: string;
	refreshToken: string;
	username: string;
}

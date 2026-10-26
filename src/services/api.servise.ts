//////////посилання з .енв
const baseUrl=import.meta.env.VITE_API_BASE_URL;
//////////////функція для підставлення в кінець посилання потрібний ендпоїнт
export const getAll = async <T, >(endpoint: string) => {
    //////////////запит з посиланням і ендпоїнтом з дужок
    const responseResult = await fetch(`${baseUrl}${endpoint}`).
    then((response: Response) => response.json());
    return responseResult as T;//////////строго типізовано до Т

}

import {login, type LoginDataType} from "../../service/services.ts";
import {useForm} from "react-hook-form";
import './LoginForm.css'


export const LoginForm = () => {//створюємо форму

    const { register, handleSubmit } = useForm<LoginDataType>();///реєстрація і відправка форми

    const onSubmit = async (data: LoginDataType) => {////що передаємо при відправці
        try {
            // Передаємо дані у функцію login, яка тепер лежить у services.ts
            const userWithTokens = await login({
                username: data.username,////у логін передаємо дані з поля юзернейм
                password: data.password,///з поля пароль
                expiresInMins: 1,///діють хв
            });

            alert("Успішний вхід!");///сповіщення якщо все гуд
            console.log("Отримано користувача:", userWithTokens);
        } catch (error) {////якщо не знайдено користувача
            console.error("Помилка авторизації:", error);
            alert("Невірний логін або пароль");
        }
    };
    return (
        <div className={'main-menu'}>
            <form className={'main-form'} onSubmit={handleSubmit(onSubmit)}>
                <label>Enter user name
                    <input type="text"{...register('username',{ required: true }) }/>
                </label>
                <label>Enter your password
                    <input type="password"{...register('password',{ required: true })}/>
                </label>
                <button>Login</button>
            </form>
        </div>
    );
};

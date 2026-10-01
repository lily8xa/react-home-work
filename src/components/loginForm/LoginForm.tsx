import {login, type LoginDataType} from "../../service/services.ts";
import {useForm} from "react-hook-form";
import './LoginForm.css'


export const LoginForm = () => {

    const { register, handleSubmit } = useForm<LoginDataType>();

    const onSubmit = async (data: LoginDataType) => {
        try {
            // Передаємо дані у функцію login, яка тепер лежить у services.ts
            const userWithTokens = await login({
                username: data.username,
                password: data.password,
                expiresInMins: 1,
            });

            alert("Успішний вхід!");
            console.log("Отримано користувача:", userWithTokens);
        } catch (error) {
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

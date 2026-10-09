import {ThemeContext} from "../context/ThemeContext.tsx";
import {useContext} from "react";

export const GreenWithButton = () => {
    // 2. Викликаємо useContext та передаємо йому наш ThemeContext
    const context = useContext(ThemeContext);

    // 3. Робимо швидку перевірку для TypeScript, щоб прибрати помилку про undefined
    if (!context) {
        return <div>Error: Context not found</div>;
    }

    // 4. Дістаємо змінні з перевіреного контексту
    const { theme, toggleTheme } = context;
    return (
        <div>
            <h1>Theme now {theme}</h1>
            <button onClick={toggleTheme}>Change Theme</button>

        </div>
    );
};

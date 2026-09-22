import type {CarType} from "../../models/CarType.ts";
import {addCar} from "../../services/api.service.ts";
import {CarForm} from "../../components/carForm/CarForm.tsx";
import {useState} from "react";

export const CreateCarPage = () => {
    const [statusMessage, setStatusMessage] = useState<{ text: string; isError: boolean } | null>(null);

    const createHandler=async(data:CarType)=>{
        try {
            setStatusMessage(null);
            await addCar(data);
            setStatusMessage({ text: "Автівку успішно збережено!", isError: false });
        } catch (error) {
            console.error(error);
            setStatusMessage({ text: "Не вдалося зберегти автівку. Спробуйте ще раз.", isError: true });
        }
    }
    return (
        <><CarForm onSubmit={createHandler}/>
            {statusMessage && (
                <p style={{ color: statusMessage.isError ? 'red' : 'green', fontWeight: 'bold' }}>
                    {statusMessage.text}
                </p>
            )}
        </>
    );
};

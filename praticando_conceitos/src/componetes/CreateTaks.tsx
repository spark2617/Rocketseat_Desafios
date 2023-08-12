import style from "./CreateTaks.module.css"
import plus from "../assets/plus.svg"
import { useState, ChangeEvent } from "react";

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface CreateTaksProps {
    create: (title: string) => void;
}

export default function CreateTaks({ create }: CreateTaksProps) {

    const [title, setTitle] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
        event.target.setCustomValidity("")
    }

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()


        if (title.trim()) {
            create(title)
            setTitle("")
        }
        else {
            alert("Não é permitido entrada de valor vazio!")
        }

    }




    return (
        <div>
            <form >
                <input
                    className={style.input}
                    placeholder="Adicione uma nova tarefa"
                    type="text"
                    onChange={handleChange}
                    value={title}
                    required

                />

                <button
                    className={style.btn}
                    type="submit"
                    onClick={handleClick}
                >
                    Criar
                    <img src={plus} />
                </button>
            </form>
        </div>
    )
}
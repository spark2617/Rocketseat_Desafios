import { useState } from "react";
import style from "./Card.module.css"
import { Trash, Check } from "phosphor-react"

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface Delete{
    delete:(id:string)=> void
}
interface Modific{
    modific:(id:string)=> void
}

export default function Card({ id, title, completed,delete:handleDelete, modific:handleModific }: Task & Delete & Modific) {

    const [isChecked, setIsChecked] = useState(completed);

    function handleCheckboxChange() {
        setIsChecked(!isChecked);
    }

    function handleClickTrash(){
        handleDelete(id)
    }

    function handleChangeModofiicCompleted(){
        handleModific(id)
    }

    return (
        <div className={style.card}>

            <div className={style.checkbox}>
                <label htmlFor={id}>

                    <input
                        id={id}
                        type="checkbox"
                        checked={isChecked}
                        onChange={event=>{
                            handleCheckboxChange()
                            handleChangeModofiicCompleted()
                        }}
                    />
                    <div className={style.circle}>
                        {isChecked ? <Check size={16} weight="bold" /> : ""}

                    </div>
                </label>

            </div>

            <div className={`${style.description} ${isChecked ? style.checked : ""}`}>
                <p>{title}</p>
            </div>

            <div className={style.trash}>
                <span
                    className={style['back-trash']}
                    onClick={handleClickTrash}
                >

                    <Trash size={22} />
                </span>
            </div>

        </div>
    )
}
import style from "./Painel.module.css"
import { ClipboardText } from "phosphor-react"
import Card from "./Card"
import CreateTaks from "./CreateTaks"
import { useState } from "react";
import { v4 } from "uuid"

interface Task {
    id: string;
    title: string;
    completed: boolean;
}


export default function Painel() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [countIsCompleted,setCountIsCompleted]=useState<number>(0)
    
    


    function createTaks(title: string) {

        let newTask: Task = { id: v4(), title: title, completed: false }

        setTasks([...tasks, newTask]);
    }

    function deleteTask(id: string) {

        let tarefa = tasks.filter((task) => task.id != id)

        setTasks(tarefa)
        
        setCountIsCompleted(
            tarefa.filter(task => task.completed).length
        )
    }

    function modificTask(id: string) {

        const modific: Task[] =
            tasks.map((task) => {

                if (task.id == id) {
                    return { ...task, completed: !task.completed };
                }
                return task
            })

        setTasks(modific);

        setCountIsCompleted(
            modific.filter(task => task.completed).length
        )

    }

 
    

    return (
        <>

            <CreateTaks create={createTaks} />

            <div className={style.painel}>
                <header className={style.header}>
                    <div>
                        <strong className={style.criada}>Tarefas criadas</strong>
                        <span>{tasks.length}</span>
                    </div>
                    <div>
                        <strong className={style.concluida}>Concluidas</strong>
                        <span>{tasks.length === 0 ? "0" : `${countIsCompleted} de ${tasks.length}`}</span>
                    </div>
                </header>


            </div>
            <main>

                {tasks.length > 0 ? (

                    tasks.map(task => (
                        <Card
                            id={task.id}
                            title={task.title}
                            completed={task.completed}
                            key={task.id}
                            delete={deleteTask}
                            modific={modificTask}
                        />
                    ))
                ) : (

                    <div className={style.listTask}>
                        <ClipboardText className={style.isTaks} color={"var(--gray-400)"} size={56} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                )}
            </main>

        </>
    )
}

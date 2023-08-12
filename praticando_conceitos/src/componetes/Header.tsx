import style from "./Header.module.css"
import rocket from "../assets/rocket.svg"

export default function Header(){
    return(
        <div className={style.header}>
            <img src={rocket} className={style.rocket} alt="Rocket" />
            <span className={style.to}>To</span>
            <span className={style.do}>Do</span>
        </div>
    )
}
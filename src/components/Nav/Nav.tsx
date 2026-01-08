import style from "./Nav.module.scss"
export const Nav = () => {

    return (
        <>
            <nav className={style.list}>
                <ul>
                    <li>
                        <a href="#">Hjem</a>
                    </li>
                    <li>
                        <a href="#">Advokterne</a>
                    </li>
                    <li>
                        <a href="#">Om LeoLov</a>
                    </li>
                    <li>
                        <a href="#">Kontakt</a>
                    </li>
                </ul>
                <div> <h4><span>leo</span>-lov</h4> </div>
            </nav>
        </>
    )
}
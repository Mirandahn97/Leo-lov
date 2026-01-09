import style from "./Header.module.scss"
import hero from "../../assets/hero.jpg"

export const Header = () => {

    return (
        <section className={style.sectionOne}>
            <div>
            <h1><span>Leo</span>-Lov</h1>
            <h5>Lov go ret kan være et plaster! Hvis du eller har knaster!</h5>
            </div>
            <img className={style.hero} src={hero} alt="front pic" />
        </section>
    )
}
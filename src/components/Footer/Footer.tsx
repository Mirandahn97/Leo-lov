import style from './Footer.module.scss'

export const Footer = () => {

    return (
        <section className={style.sectionFooter}>
            <div>
                <h4>Adresse</h4>
                <p>Find os her</p>
                <ul>
                    <li>
                        <a href="#">Maldive rd. 22, <br />Seychelle Islands</a>
                    </li>
                </ul>
            </div>

            <div>
                <h4>Kontakt</h4>
                <p>Kntakt os her:</p>
                <ul>
                    <li>
                        <a href="#">email@mail.dk</a>
                    </li>
                    <li>
                        <a href="#">Tlf: 01923023</a>
                    </li>
                </ul>
            </div>

            <div>
                <h4>Politik</h4>
                <p>Vores politikker:</p>
                <ul>
                    <li>
                        <a href="#">Privatlivspolitik</a>
                    </li>
                    <li>
                        <a href="#">Cookiepolitik</a>
                    </li>
                    <li>
                        <a href="#">Generalle betingelse</a>
                    </li>
                </ul>
            </div>

            <div>
                <h4>Sociale medier</h4>
                
            </div>
        </section>
    )
}
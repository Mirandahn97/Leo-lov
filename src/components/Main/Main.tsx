import style from './Main.module.scss'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import John from '../../assets/John.png'
import Peter from '../../assets/Peter.png'
import Elise from '../../assets/Elise.png'
import Morten from '../../assets/Morten.png'
import location from '../../assets/location.png'
export const Main = () => {

    return (
        <>

            {/* SECTION ONE */}
            <section className={style.sectionOne}>
                <article>
                    <h3>Familieret</h3>
                    <p>Familieret er en ret alle har.
                        Har du en familie har du sikkert ret til familieret.
                        Medmindre du altid er den der tror du har ret.
                        Så kan vi desværre ikke hjælpe dig.
                    </p>
                </article>
                <article>

                    <h3>Ejendomsret</h3>
                    <p>Har du købt et hus og fortrudt eller er du blevet svindlet?
                        Fortvivl ej.
                        Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det. </p>
                </article>
                <article>
                    <h3>Konkurs</h3>
                    <p>Er du gået konkurs ville vi rigtig gerne hjælpe,
                        men det kan vi desværre ikke.
                        Vi er alle advokater med fede biler her,
                        så har du ingen penge får du ingen hjælp.
                    </p>
                </article>
                <article>
                    <h3>Selskabsret</h3>
                    <p>Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab?
                        Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette,
                        så henvend dig idag.
                    </p>
                </article>
            </section>

            {/* SECTION TWO */}
            <section className={style.sectionTwo}>
                <figure>
                    <figcaption>
                        <img className={style.image1} src={image1} alt="" />
                    </figcaption>
                    <div>
                        <h3>INTET PROBLEM</h3>
                        <p>Leo-Lov har altid været det bedste advokatfirma i verde.
                            Der er simpelhen ingen der kan måle sig med os.
                            Vi kan løse alle problemer så længe du har penge.
                            Hvis du mod alt forventning skulle opleve at støde på et retslig problem
                            som Leo-Lov ikke kan løse får du halvdelen af beløbet igen.
                        </p>
                        <p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
                    </div>
                </figure>
                <figure>
                    <div>
                        <h3>EVIG GARANTI</h3>
                        <p>Leo-Lov har altid været det bedste advokatfirma i verde.
                            Der er simpelhen ingen der kan måle sig med os.
                            Vi kan løse alle problemer så længe du har penge.
                            Hvis du mod alt forventning skulle opleve at støde på et retslig problem
                            som Leo-Lov ikke kan løse får du halvdelen af beløbet igen.
                        </p>
                        <p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
                    </div>
                    <figcaption>
                        <img className={style.image2} src={image2} alt="" />
                    </figcaption>
                </figure>
            </section>

            {/* SECTION THREE */}
            <section className={style.sectionThree}>
                <h2>MØD HOLDET</h2>
                <div className={style.team}>
                    <figure>
                        <figcaption>
                            <img className={style.John} src={John} alt="" />
                        </figcaption>
                        <div>
                            <h5>John Harbinger</h5>
                            <p>"Jeg er den mest successfulde advokat i firmaet.
                                I hvert fald mere end Peter"</p>
                        </div>
                    </figure>
                    <figure>
                        <figcaption>
                            <img className={style.Peter} src={Peter} alt="" />
                        </figcaption>
                        <div>
                            <h5>Peter Paker</h5>
                            <p>"JEg holder af kaffe og så er jeg helt enormt succesfuld.
                                Meget mere end John"
                            </p>
                        </div>
                    </figure><figure>
                        <figcaption>
                            <img className={style.Elise} src={Elise} alt="" />
                        </figcaption>
                        <div>
                            <h5>Elise Li</h5>
                            <p>"Uden ret og lov, kunne vi ligeså godt bo i en skov.
                                Sådan har jeg altid sagt"</p>
                        </div>
                    </figure><figure>
                        <figcaption>
                            <img className={style.Morten} src={Morten} alt="" />
                        </figcaption>
                        <div>
                            <h5>Morten Nate</h5>
                            <p>"Jeg er født på landet.
                                På landet er der ingen ret og lov.
                                Det er det vilde vesten derude."</p>
                        </div>
                    </figure>
                </div>
            </section>

            {/* SECTION FOUR */}
            <section className={style.sectionFour}>
                <figure>
                    <figcaption>
                        <img className={style.location} src={location} alt="" />
                    </figcaption>
                    <div>
                    <h3>HER BOR VI</h3>
                    <p>Vi har valgt at bosætte os i sole!</p>
                    <p>Her er dejlig varmt og ikke ret mange fattige mennesker.
                        Det nyder vi rigtig meget.
                    </p>
                    <p>"Hvis du har råd til at tage til Sechellerne har du råd til os".
                        Det er et af vores utallige motto'er"
                    </p>
                    <ul>
                        <li>
                            <a href="#">Leo-Lov ApS</a>
                        </li>
                        <li>
                            <a href="#">Maldive rd. 22</a>
                        </li>
                        <li>
                            <a href="#">Seyhelles</a>
                        </li>
                    </ul>
                    </div>
                </figure>
            </section>
        </>
    )
}
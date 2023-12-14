import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

import style from './Perfil.module.css';

function Perfil(): React.JSX.Element {
    return (
        <>
        <Header/>
        <div className={style.main}>
            <header>
                <picture>
                    <img src="src/assets/images/Header/userWhite.svg"/>
                </picture>
                <h1>¡Hola! Marcelo!</h1>
            </header>

            <section className={style.sectionData}>
                <article className={`${style.article} ${style.articleName}`}>NickName</article>
                <article className={`${style.article} ${style.edad}`}>Edad</article>
                <article className={`${style.article} ${style.articleEmail}`}>Email</article>
                <article className={`${style.article} ${style.articlePhoto}`}>Foto</article>
            </section>

            <section className={style.sectionPassword}>
                <header>
                    Cambiar contraseña
                </header>
                <article>
                    <label htmlFor="password">Contraseña actual</label>
                    <input type="password" name="password" id="password"/>
                </article>

                <article>
                    <label htmlFor="newPassword">Nueva contraseña</label>
                    <input type="password" name="newPassword" id="newPassword"/>
                </article>
                
            </section>
        </div>
        <Footer/>
        </>
    );
}

export { Perfil }
import "./NosotrosComponent.css";

function NosotrosComponent(): React.JSX.Element {
  return (
    <>
      <header>
        <h1 className="titulo">¿Por qué nosotros?</h1>
      </header>
      <article className="article">
        <p>
          Porque más que un cine, somos un espacio comprometido con el cambio.
          En cada proyección, cada entrada comprada, estamos construyendo un
          futuro mejor para todos. ¿Por qué elegirnos?
        </p>
        <ol>
          <li>
            <b>Entretenimiento con Propósito: </b>Disfruta de las mejores
            películas mientras contribuyes al bienestar global. El 5% del precio
            de tus entradas se destina a proyectos que marcan la diferencia.
            Colaboramos activamente con Save the Children y Reforesta, apoyando
            iniciativas para la infancia y la preservación del medio ambiente.
          </li>
          <li>
            <b>Cine con Conciencia:</b> Dos veces al mes, te invitamos a unirte
            a nuestra misión proyectando películas relacionadas con los 17
            Objetivos de Desarrollo Sostenible (ODS) establecidos por las
            Naciones Unidas. Desde igualdad de género hasta cambio climático,
            exploramos temas vitales que impactan nuestro mundo.
          </li>
          <li>
            <b>Experiencia Única:</b> En CineEstelar, no solo vas a ver una
            película, vivirás una experiencia. Nuestras instalaciones están
            diseñadas para tu comodidad y disfrute. Además, cada boleto
            adquirido es un paso más hacia un futuro más brillante para las
            generaciones venideras.
          </li>
          <li>
            <b>Compromiso con la Comunidad: </b>Nos preocupamos por nuestra
            comunidad. A través de eventos especiales, colaboraciones locales y
            actividades educativas, nos esforzamos por ser un motor de cambio en
            nuestra área.
          </li>
        </ol>
        <p>
          Al elegir CineEstelar, no solo te sumerges en el mundo del cine, sino
          que también te conviertes en parte de un movimiento global hacia un
          futuro más justo, sostenible e inclusivo para todos.
        </p>
        <p>
          Únete a nosotros en esta emocionante travesía de películas con
          propósito, entretenimiento consciente y acción transformadora. Juntos,
          ¡hagamos que cada entrada sea un paso hacia un mundo mejor!
        </p>
      </article>
    </>
  );
}
export { NosotrosComponent };

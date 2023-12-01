import "./colaboradores.css";

function Colaboracion() {
  return (
    <section>
      <article className="article article-1">
        <header>
          <h1>Campaña de Colaboración del Cine Estelar: </h1>
          <h2>Iluminando Vidas, Protegiendo Bosques</h2>
        </header>

        <p>
          En el corazón de nuestra pasión por el séptimo arte, el Cine Estelar
          se enorgullece de presentar una campaña única que va más allá de las
          pantallas para tocar las vidas de aquellos que más lo necesitan. Nos
          complace anunciar nuestra colaboración solidaria, donde cada entrada
          vendida se convierte en un rayo de esperanza para dos causas
          fundamentales: la lucha contra la pobreza infantil y la preservación
          de nuestros preciados bosques.
        </p>
      </article>
      <article className="article article-2">
        <header>
          <h2>Iluminando Vidas: Un Compromiso con la Pobreza Infantil</h2>
        </header>

        <p>
          En asociación con organizaciones benéficas dedicadas a la infancia,
          nuestro cine se compromete a destinar una parte significativa de los
          beneficios para apoyar a niños en situación de pobreza extrema.
          Creemos en la capacidad del cine para inspirar y empoderar, y queremos
          extender esa luz a aquellos que enfrentan desafíos desde una edad
          temprana. Cada boleto vendido contribuye a proporcionar educación,
          atención médica y recursos esenciales para construir un futuro mejor
          para estos jóvenes valientes.
        </p>
        <img className="img1" src="src/assets/images/colaboraciones/pobreza.png" alt="logo ong pobreza" />
      </article>
      <article className="article article-3">
        <header>
          <h2>
            Protegiendo Bosques: Un Firme Rechazo a la Explotación Forestal
          </h2>
        </header>

        <p>
          Nuestra responsabilidad ambiental se refleja en nuestro compromiso con
          la preservación de los bosques del mundo. Por cada entrada vendida,
          destinamos recursos para combatir la explotación forestal y apoyar
          iniciativas de reforestación. Nos esforzamos por ser guardianes de la
          naturaleza, reconociendo la importancia de los bosques en la salud de
          nuestro planeta. Con esta campaña, no solo proyectamos historias
          cautivadoras en la pantalla, sino que también contribuimos a conservar
          los escenarios reales que inspiran esas historias. Únete a nosotros en
          esta noble causa al elegir el Cine Estelar para tu próxima experiencia
          cinematográfica. Cada vez que disfrutas de una película, no solo te
          sumerges en mundos fascinantes, sino que también eres parte de una
          historia más grande: la historia de la solidaridad, la esperanza y la
          preservación. Juntos, iluminamos vidas y protegemos bosques, creando
          un impacto duradero más allá de la magia del cine. ¡Gracias por ser
          parte de esta campaña de colaboración que marca la diferencia!
        </p>
        <img className="img2" src="src/assets/images/colaboraciones/reforestalogo.png" alt="logo ong forestal" />
      </article>
    </section>
  );
}
export { Colaboracion };

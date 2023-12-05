import "./SomosComponent.css";

function NosotrosComponent(): React.JSX.Element {
  return (
    <>
      <header>
        <h1 className="titulo">
          ¡Bienvenidos a nuestra comunidad en CineEstelar!
        </h1>
      </header>
      <article className="article">
        <p>
          Somos Alan, Lia, Saray y Sergio, un equipo unido por la pasión por el
          cine y el compromiso con un mundo mejor.
        </p>
        <p>
          Conoce nuestra historia, nuestra visión y el camino que estamos
          trazando juntos hacia un futuro donde el entretenimiento se entrelaza
          con la responsabilidad social. Únete a nosotros en esta aventura donde
          cada fotograma cuenta una historia de cambio y esperanza.
        </p>
        
      </article>
    </>
  );
}
export { NosotrosComponent };

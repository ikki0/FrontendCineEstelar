import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header"
import { PhotoInterface } from "../../interfaces/PhotoInterface";
import { PhotoClass } from "../../classes/PhotoClass";

function Home (): React.JSX.Element {
  const [photos, setPhotos] = useState<PhotoClass[] | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  // Es necesario utilizar useEffect para realizar cualquierpetición a una API para evitar que se realicen peticiones infinitas, es necesario utilizar un array vacío como segundo parámetro
  // de esta forma, la petición se realizará una sola vez
  useEffect(() => {
    // setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => response.json())
      .then((data: PhotoInterface[]) => {
        // Convierte cada objeto JSON en una instancia de la clase Photo
        const photoObjects = data.map(photoData => new PhotoClass(photoData));
        setPhotos(photoObjects);
        // setLoading(false);
      })
      .catch(error => console.error('error: ' , error));
      }, []);

      // if (loading){
      //   return <p>cargando...</p>
      // }

  return (
    <>
    <Header/>
    <div>
      <h1>PAGINA Home</h1>

      {/* {photos ? <pre>{JSON.stringify(photos, null, 2)}</pre> : 'Loading...'} */}
     {/* { photos? JSON.stringify(photos, null, 2) : 'Loading...'} */}

      {photos ? (
          <div>
            {photos.map((photo, index) => (
              <div key={index}>
                <h2>{photo.getTitle()}</h2>
                <img src={photo.getUrl()} alt={photo.getTitle()} />
              </div>
            ))}
          </div>
        ) : (
          'Loading...'
        )}

    </div>
    </>
  )
}

export { Home }


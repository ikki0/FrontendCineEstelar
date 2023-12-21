import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

import style from './Perfil.module.css';
import { CustomerClass } from "../../classes/CustomerClass";
import { SpinnerCharge } from "../../components/SpinnerCharge/SpinnerCharge";
import BasicModal from "../../components/Perfil/BasicModal";
import { ToastContainer, toast } from "react-toastify";
import { ButtonSubmitOnClick } from "../../components/Button/ButtonSubmitOnClick";


function Perfil(): React.JSX.Element {
    const [customer, setCustomers] = useState<CustomerClass>();
    const [isLoading, setIsLoading] = useState(true);
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [image, setImage] = useState<string | null>(null);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        // Realizar la petición a la API
        const name = localStorage.getItem('name');
        fetch(`http://localhost:8081/usuarios/profile/${name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Convertir cada objeto JSON en una instancia de la clase Photo
                setCustomers(new CustomerClass(data));
                // console.log('los datos son : ' , customer)
                setImage(data.avatarUrl); // establecer la imagen aquí
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    }, [reload]);

    if (isLoading) {
        return (
            <SpinnerCharge />
        );
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>): void {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            const file = e.target.files[0];

            reader.onloadend = () => {
                const img = new Image();
                img.src = reader.result as string;
                img.onload = () => {
                  const canvas = document.createElement('canvas');
                  const ctx = canvas.getContext('2d');
                  
                  if (ctx) {
                    // Reducir el tamaño de la imagen
                    const MAX_WIDTH = 500;
                    const MAX_HEIGHT = 500;
                    let width = img.width;
                    let height = img.height;
                
                    if (width > height) {
                      if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                      }
                    } else {
                      if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                      }
                    }
                
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                
                    // Guarda la imagen en el estado
                    setImage(canvas.toDataURL(file.type));
                  }
                };
              };
            
              reader.readAsDataURL(file);
        }
    }

    function putAllFieldsEmpty() {
        setCurrentPassword('');
        setNewPassword('');
    }


    function handleSubmit() : void{
        // Aquí puedes hacer lo que necesites con currentPassword y newPassword
        if (!currentPassword.length || !newPassword.length) {
            console.log(`Error Escriba alguna contraseña`);
            return;
        }
        const data = {
            correoCliente: customer?.getCorreoCliente(),
            nickCliente: customer?.getNickCliente(),
            contrasenyaCliente: currentPassword,
            edadCliente: customer?.getEdadCliente(),
            avatarUrl: "null",
            nuevaContrasenya: newPassword
        };

        fetch('http://localhost:8081/usuarios/update/password', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                if (data === 'La contraseña actual es incorrecta.') {
                    toast.error('La contraseña actual es incorrecta.', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3500,
                    });
                } else {
                    putAllFieldsEmpty();
                    toast.success('Contraseña cambiada correctamente', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3500,
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function handleSubmitImage(): void {
        const data = {
            correoCliente: customer?.getCorreoCliente(),
            nickCliente: customer?.getNickCliente(),
            contrasenyaCliente: currentPassword,
            edadCliente: customer?.getEdadCliente(),
            avatarUrl: image,
          };
        
          fetch('http://localhost:8081/usuarios/update/avatar', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.text())
          .then(data => {
            if (data === 'Imagen de perfil cambiada exitosamente') {
                toast.success('Imagen de perfil cambiada exitosamente');
                setReload(!reload);
              } else {
                toast.error('Hubo un error al cambiar la imagen de perfil');
              }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    return (
        <>
            <Header />
            <div className={style.main}>
                <div className={style.containerMain}>
                    <header className={style.header}>
                        <picture className={style.picture}>
                            <img className={style.avatar} src={customer?.getAvatarUrl() ? customer?.getAvatarUrl() : 'src/assets/images/Header/userWhite.svg'} />
                        </picture>
                        <h1>
                            ¡Bienvenido {customer?.getNickCliente()} !
                        </h1>
                    </header>

                    <section className={style.sectionDataUser}>
                        <header className={style.headerDataUser}>
                            <h1>Datos del Usuario</h1>
                        </header>

                        <article className={`${style.article} ${style.articleName}`}>
                            <div className={style.containerArticle}>
                                <h1>NickName</h1>
                                <input className={style.inputDataUser} type="text" value={customer?.getNickCliente()} readOnly />
                            </div>
                        </article>

                        <article className={`${style.article} ${style.articleName}`}>
                            <div className={style.containerArticle}>
                                <h1>Edad</h1>
                                <input className={style.inputDataUser} type="text" value={customer?.getEdadCliente()} readOnly />
                            </div>
                        </article>

                        <article className={`${style.article} ${style.articleName}`}>
                            <div className={style.containerArticle}>
                                <h1>Email</h1>
                                <input className={style.inputDataUser} type="text" value={customer?.getCorreoCliente()} readOnly />
                            </div>
                        </article>

                    </section>

                    <section className={style.sectionDataUser}>
                        <header className={style.headerDataUser}>
                            <h1>Editar Datos</h1>
                        </header>

                        <article className={`${style.article} ${style.articlePassword}`}>
                            <div className={style.containerArticle}>
                                <h1>Contraseña</h1>
                                <input className={style.inputDataUser} type="password" value="*********" readOnly />
                                <BasicModal currentPassword={currentPassword} setCurrentPassword={setCurrentPassword} newPassword={newPassword} setNewPassword={setNewPassword} onSubmit={handleSubmit} />
                            </div>
                        </article>

                        <article className={`${style.article} ${style.articleImage}`}>
                            <div className={style.containerArticle}>
                                <header>
                                    <h1>Cambiar Imagen</h1>
                                </header>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="raised-button-file">
                                    <div className={style.imageContainer}>
                                        {image ? <img className={style.image} src={image} alt="Upload preview" /> : 'Click para subir imagen'}
                                    </div>
                                </label>
                            </div>
                            <ButtonSubmitOnClick onClick={handleSubmitImage} text="Subir imagen" />
                        </article>
                    </section>
                    <ToastContainer />
                </div>
            </div>
            <Footer />
        </>
    );
}

export { Perfil }
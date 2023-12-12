import style from './TitleContainer.module.css';

function TitleContainer(props: { title: string }) {
  return (
    <header className={style.containerHeader}>
      <h2 className={style.title}>{props.title}</h2>
    </header>
  );
}
  
export { TitleContainer } ;
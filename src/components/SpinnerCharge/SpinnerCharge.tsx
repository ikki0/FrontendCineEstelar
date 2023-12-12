import styles from './SpinnerCharge.module.css'

function SpinnerCharge(): React.JSX.Element{
    return(
        <div className={styles.containerSpinner}>
            <div className={styles.spinner}></div>
        </div>
       
    );
}

export { SpinnerCharge }
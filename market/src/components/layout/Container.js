import styles from './Container.module.css';

function Container(props){
    return <div className={`${styles.Container} ${styles[props.custmClass]}`}>{props.children}</div>
}

export default Container
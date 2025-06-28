import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
return (<footer className={styles.footer}>
    <div className={styles.social_list}>
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
        
    </div>
<p className={styles.copy_right}>
    <span>Dorleto&Fonseca</span> &copy;2025
</p >
</footer>
)
}

export default Footer
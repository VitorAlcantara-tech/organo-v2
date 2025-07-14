
import styles from './Rodape.module.css'

const Rodape = () => {
    return (
        <footer>
            <div className={styles.esquerda}>
                <a href='https://www.instagram.com/_vitor_alcan/'><img src='./imagens/instagram.png' alt='Logo WhatsApp' /></a>

                <div>
                    <img src='./imagens/whatsapp.png' alt='Logo WhatsApp' />
                    <p>(11) 99623-8818</p>
                </div>
            </div>

            <div className={styles.logo}>
                <img src='./imagens/logo.png' alt='Logo Organo' />
            </div>

            <div className={styles.direita}>
                <h3>Desenvolvido por Vitor Alcantara</h3>
                <img src='./imagens/logo-vitor.png' alt='Logo Vitor Alcantara' />
            </div>
        </footer>
    )
}

export default Rodape
import Image from "next/image";
import styles from "./sabores.module.css";
import imgOreo from "../../../public/sabor-oreo.jpg";
import imgPistache from "../../../public/sabor-pistache.png";
import imgCookiesAvela from "../../../public/sabor-cookies-avela.png";
import imgKiwi from "../../../public/sorbet-kiwi.png";
import imgMorango from "../../../public/sorbet-morango.png";
import imgLimao from "../../../public/sorbet-limao.png";


export default function Sabores() {
    return (
        <main>

        <div className={styles.banner}>
            <h1>NOSSOS SABORES</h1>
        </div>

        <div className={styles.secaoSabores}>
            <div className={styles.saboresTitulo}>
                <h3>SABORES DE SORVETE</h3>
            </div>
            <div className={styles.containerCardsSabores}>

                <div className={styles.card}>
                    <Image src={imgOreo}/>
                    <h4>Sorvete de Oreo</h4>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>

                <div className={styles.card}>
                <Image src={imgPistache}/>
                    <h4>Sorvete Pistache</h4>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>

                <div className={styles.card}>
                    <Image src={imgCookiesAvela}/>
                    <h4>Sorvete Cookies & Avelã</h4>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                </div>

                <div className={styles.card}>
                    <Image src={imgKiwi}/>
                    <h4>Sorvete de Kiwi</h4>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>

                <div className={styles.card}>
                    <Image src={imgMorango}/>
                    <h4>Sorvete de Morango</h4>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>

                <div className={styles.card}>
                    <Image src={imgLimao}/>
                    <h4>Sorvete de Limão Siciliano</h4>
                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
            </div>
        </div>
        </main>
    );
}
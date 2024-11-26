import styles from "./sobre.module.css";
import Image from "next/image";
import img1 from "../../../public/sobre-image.jpg";
import img2 from "../../../public/sorveteria.jpg";


export default function Sobre() {
    return (
        <main>
        <div className={styles.banner}>
            <h1>A GELATERIA</h1>
        </div>
        <div className={styles.secaoSobre}>
            <h3>Sobre Nós</h3>
            <p>
            <span>Nós simplesmente amamos sorvete!</span>
            </p>
            <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
            <br />
            <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
        </div>
        <div className={styles.secaoFotosSorveteria}>
            <div className={styles.containerImage}>
            <Image src={img1}/>
            </div>
            <div className={styles.containerImage}>
            <Image src={img2}/>
            </div>
        </div>
        </main>
    );
}
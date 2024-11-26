import { Children } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import imagemSabores from "../../public/banner-sabores.jpg";
import imagemEventos from "../../public/eventos-image.jpg";
import imagemSobreNos from "../../public/sobre-image.jpg";

export default function Home() {
  return (
    <main>
      <div className={styles.banner}>
        <h1>SORVETE ARTESANAL</h1>
      </div>

      <div className={styles.secaoInformacoesContainer}>
        <div className={styles.containerImagem}>
        <Image src={imagemSabores}/>
        </div>
        <div className={styles.secaoInformacoesTexto}>
          <h3>Nossos produtos</h3>
          <p><span>Novos e deliciosos!</span></p>
          <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>
      </div>

      <div className={styles.secaoInformacoesContainer}>
        <div className={styles.secaoInformacoesTexto}>
          <h3>NOSSOS EVENTOS</h3>
          <p><span>Delicias com sorvete!</span></p>
          <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
        </div>
        <div className={styles.containerImagem}>
          <Image src={imagemEventos}/>
        </div>
      </div>

      <div className={styles.secaoInformacoesContainer}>
        <div className={styles.containerImagem}>
          <Image src={imagemSobreNos}/>
        </div>
        <div className={styles.secaoInformacoesTexto}>
          <h3>SOBRE NÓS</h3>
          <p><span>Alegria em cada casquinha!</span></p>
          <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
        </div>
      </div>

    </main>
  );
}

import Image from "next/image";
import logo from "../../../../public/logo.png";
import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <main>
      <div className={styles.containerRodape}>
        <Image src={logo} alt="logo" />

        <div className={styles.boxRodape}>
          <h4>ENDEREÇO</h4>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className={styles.boxRodape}>
          <h4>CONTATO</h4>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div className={styles.boxRodape}>
          <h4>HORÁRIOS</h4>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
        <div className={styles.nomeDesenvolvedor}>
          <p>
            Gelateria. Orgulhosamente desenvolvido por "André Monteiro Rachel"
          </p>
        </div>
    </main>
  );
}

import Image from "next/image";
import styles from "./Topo.module.css";
import Link from "next/link";
import logo from "../../../../public/logo.png";

export default function Topo() {
  return (
    <div className={styles.topoPagina}>
      <Image src={logo} alt="logo" />
      <nav className={styles.linksNav}>
        <Link href="/">Home</Link>
        <Link href="/sabores">Sabores</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </div>
  );
}




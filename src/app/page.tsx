import Image from "next/image";
import styles from "./page.module.css";
import Rowstack from "./component/Rowstack";

export default function Home() {
  return (
    <main className={styles.main}>
      <Rowstack />
    </main>
  );
}

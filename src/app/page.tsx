import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";
import { headers } from "next/headers";


export const metadata = {
  title:'Home' , 
  description:'description' ,
} ; 

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li><Link href={'/about'}>about</Link></li>
        <li><Link href={'/team'}>team</Link></li>
      </ul>
      <Link href={"/pages"}>go to another page</Link>
    </main>
  );
}

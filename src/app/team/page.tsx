


import Link from "next/link";
import styles from "../page.module.css";

export const metadata = {
  title:'My Team' , 
  description:'My team description' ,
} ;


export default function Team() {
  

  return (
    <main className={styles.main}>
      <h1>Team</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Corporis ea quas perspiciatis sapiente enim aperiam dicta quaerat, 
        laboriosam praesentium nihil expedita ad voluptates architecto, cumque, 
        labore natus tempora doloremque consequuntur.</p>
        <Link href={'/'}>to home</Link>
    </main>
  );
}


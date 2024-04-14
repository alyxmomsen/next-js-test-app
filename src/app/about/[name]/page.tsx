

import Link from "next/link";
import styles from "@/app/page.module.css";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


export const metadata = {
    title:'About' , 
    description:'description' ,
  } ; 

export default async function AboutDinamix({params:{name}}:{params:Params}) {
  
  return (
    <main className={styles.main}>

      <h1>About {name}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Corporis ea quas perspiciatis sapiente enim aperiam dicta quaerat, 
        laboriosam praesentium nihil expedita ad voluptates architecto, cumque, 
        labore natus tempora doloremque consequuntur.</p>
        <Link href={'/'}>to home</Link>
        <pre>
            
        </pre>
    </main>
  );
}




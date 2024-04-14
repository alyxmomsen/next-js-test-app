

import Link from "next/link";
import styles from "../page.module.css";
import axios from "axios";
import { resolve } from "path";
import { Suspense } from "react";


export default async function About() {
  
    

  return (
    <main className={styles.main}>
      <h1>About</h1>
      <Suspense fallback="hello world">
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Dignissimos, 
                neque cumque nostrum quae aspernatur 
                numquam sunt aliquam optio voluptas incidunt 
                molestiae illo expedita perspiciatis sequi qui quis, 
                dolorem eius. Vitae.</p>
            <Link href={'/'}>to home</Link>
      </Suspense>
        
    </main>
  );
}


async function getRepos() {

    await new Promise((resolve) => {
        
        setTimeout(resolve , 5000 , 'data data data') ;
        console.log('result result') ;

    });

    

    const response = await axios.get('https://api.github.com/users/alyxmomsen/repos').catch(err => console.log(err)) ;
    console.log('result');
    
    return <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Corporis ea quas perspiciatis sapiente enim aperiam dicta quaerat, 
    laboriosam praesentium nihil expedita ad voluptates architecto, cumque, 
    labore natus tempora doloremque consequuntur.</p>

    return response ;

    
}

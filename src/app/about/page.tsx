

import Link from "next/link";
import styles from "../page.module.css";
import axios from "axios";
import { resolve } from "path";
import { Suspense } from "react";

import * as React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';


export default async function About() {
  
    

  return (
    <main className={styles.main}>
      <h1>About</h1>
      <Suspense fallback={<CircularIndeterminate />}>
            <Slow />
      </Suspense>
        
            <Link href={'/'}>to home</Link>
    </main>
  );
}


async function Slow () {

  await new Promise((resolve) => {


    setTimeout(resolve , 5000 , 'Jhon Doe')

  } )


  return (
    <div>
      slow component:
      <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Dignissimos, 
                neque cumque nostrum quae aspernatur 
                numquam sunt aliquam optio voluptas incidunt 
                molestiae illo expedita perspiciatis sequi qui quis, 
                dolorem eius. Vitae.</p>
    </div>
  )
}


export function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
